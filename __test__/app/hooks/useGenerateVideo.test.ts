import {formData} from '../../mocks/formConfig.mock';

import {act, renderHook} from '@testing-library/react';

import '@testing-library/jest-dom';

import {useGenerateVideo} from '../../../src/app/hooks/useGenerateVideo';

const fetchVideoUrlMock = () =>
	Promise.resolve({
		ok: true,
		status: 200,
		blob: () => 'myVideo',
	});

jest.spyOn(global, 'fetch').mockImplementation(fetchVideoUrlMock);
global.URL.createObjectURL = jest.fn((blob) => `mocked-url-for-${blob}`);

describe('useGenerateVideo', () => {
	const renderUseGenerateVideo = () =>
		renderHook(() => useGenerateVideo(formData, 'myVideo'));

	it('should return the default values', () => {
		const {result} = renderUseGenerateVideo();

		expect(result.current.isLoading).toBeFalsy();
		expect(result.current.videoUrl).toBeUndefined();
		expect(result.current.error).toBeUndefined();
	});

	it('should set isLoading to true while fetching video', async () => {
		const {result} = renderUseGenerateVideo();

		expect(result.current.isLoading).toBeFalsy();

		act(() => {
			result.current.getVideoLink();
		});

		expect(result.current.isLoading).toBeTruthy();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.isLoading).toBeFalsy();
	});

	it('should set videoUrl when fetch is successful', async () => {
		const {result} = renderUseGenerateVideo();
		expect(result.current.videoUrl).toBeUndefined();

		act(() => {
			result.current.getVideoLink();
		});

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.videoUrl).toEqual('mocked-url-for-myVideo');
	});

	it('should set error when fetch fails', async () => {
		jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Fetch Error'));

		const {result} = renderUseGenerateVideo();
		expect(result.current.error).toBeUndefined();

		act(() => {
			result.current.getVideoLink();
		});

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.error).toBe('Error while generating the video');
	});
});
