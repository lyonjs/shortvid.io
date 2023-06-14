import {renderHook, act} from '@testing-library/react';
import {useSelectedTheme} from '../../../src/app/hooks/useSelectedTheme';
import {CustomThemeProvider} from '../../../src/context/CustomThemeProvider';

describe('useSelectedTheme', () => {
	const renderSelectedThemeHook = () =>
		renderHook(() => useSelectedTheme(), {
			wrapper: ({children}) => (
				<CustomThemeProvider>{children}</CustomThemeProvider>
			),
		});

	it('should initialize with the system theme as default', async () => {
		const {result} = renderSelectedThemeHook();

		expect(result.current.themeName).toEqual('light');
		expect(result.current.selectedTheme).toEqual('system');
	});

	it('should handle selecting a new theme', () => {
		const {result} = renderSelectedThemeHook();

		act(() => {
			result.current.setSelectedTheme('dark', 'dark');
		});

		expect(result.current.themeName).toEqual('dark');
		expect(result.current.selectedTheme).toEqual('dark');
	});

	it('should handle selecting the light theme', () => {
		const {result} = renderSelectedThemeHook();

		act(() => {
			result.current.setSelectedTheme('light', 'light');
		});

		expect(result.current.themeName).toEqual('light');
		expect(result.current.selectedTheme).toEqual('light');
	});
});
