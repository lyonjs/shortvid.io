import {interpolate, useCurrentFrame} from 'remotion';

export const WallTop: React.FC = () => {
	const frame = useCurrentFrame();

	const lightWall = interpolate(
		frame,
		[0, 30, 31, 60, 61, 70, 71, 80, 81, 90, 91],
		[0.07, 0.07, 0.12, 0.12, 0.18, 0.18, 0.26, 0.26, 0.32, 0.32, 0.4],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);

	return (
		<g id="wall-top" style={{opacity: lightWall}}>
			<path
				id="&lt;Path&gt;"
				className="s2244"
				d="m2044.8 38h-710.9-271.4c-760.3 0-1148.3-31.4-790.3 132.7 150.1 68.9 220.6 104.2 247.5 104.2 0 0 606.4-12.4 808.6-11.8 203.6 0.7 814.2 16.8 814.2 16.8 32.5-5 90.2-26.6 234.1-100.8 283.5-146.1 161.3-141.1-331.8-141.1z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2245"
				d="m2039.6 41.8c-1 0-702.3-0.1-706.7-0.1-4.6 0-275.3 0.1-276.1 0.1-746.6 0-1130.4-30.9-779.9 130.3 147.1 67.6 216.1 102.3 242.7 102.3 0 0 605.8-12.3 807.8-11.7 203.3 0.6 813.3 16.6 813.3 16.6 32.1-4.9 88.6-26.2 229.6-99 277.6-143.5 154.1-138.5-330.7-138.5z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2246"
				d="m2035.4 45.6c-2 0-693.8-0.3-702.6-0.3-9.1 0-279.1 0.3-280.8 0.3-732.7 0-1112.5-30.3-769.4 127.8 144 66.3 211.5 100.4 237.8 100.4 0 0 605.2-12.1 807-11.5 203.2 0.6 812.4 16.4 812.4 16.4 31.7-4.9 87.2-25.8 225.2-97.2 271.6-140.8 147-135.9-329.6-135.9z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2247"
				d="m2031.3 49.4c-3.1 0-685.3-0.4-698.5-0.4-13.7 0-283 0.4-285.5 0.4-719 0-1094.6-29.7-758.9 125.4 140.9 65 206.9 98.5 232.9 98.5 0 0 604.6-12 806.2-11.5 202.9 0.6 811.5 16.3 811.5 16.3 31.3-4.8 85.6-25.4 220.7-95.4 265.7-138.1 139.9-133.3-328.4-133.3z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2248"
				d="m2027.1 53.2c-4.1 0-676.8-0.6-694.4-0.6-18.3 0-286.7 0.6-290.2 0.6-705.1 0-1076.7-29.1-748.4 122.9 137.8 63.7 202.3 96.7 228 96.7 0 0 604-11.9 805.4-11.4 202.7 0.6 810.7 16 810.7 16 30.8-4.6 84.1-24.9 216.2-93.5 259.8-135.5 132.7-130.7-327.3-130.7z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2249"
				d="m2022.9 57c-5.1 0-668.2-0.7-690.3-0.7-22.8 0-290.5 0.7-294.8 0.7-691.4 0-1058.8-28.6-738 120.4 134.8 62.5 197.8 94.9 223.1 94.9 0 0 603.5-11.9 804.7-11.3 202.5 0.6 809.8 15.8 809.8 15.8 30.3-4.5 82.6-24.5 211.7-91.8 253.9-132.7 125.6-128-326.2-128z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2250"
				d="m2018.8 60.8c-6.2 0-659.8-0.8-686.2-0.8-27.4 0-294.4 0.8-299.6 0.8-677.5 0-1040.9-28-727.5 118 131.7 61.2 193.2 92.9 218.3 92.9 0 0 602.8-11.7 803.8-11.1 202.3 0.5 808.9 15.6 808.9 15.6 30-4.5 81.1-24.1 207.3-90 248-130.1 118.4-125.4-325-125.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2251"
				d="m2014.6 64.5c-7.2 0-651.2-0.9-682.1-0.9-32 0-298.2 0.9-304.2 0.9-663.8 0-1023-27.3-717 115.6 128.5 59.9 188.6 91.1 213.3 91.1 0 0 602.3-11.6 803.1-11.1 202 0.6 808 15.5 808 15.5 29.5-4.4 79.6-23.7 202.8-88.2 242.1-127.4 111.3-122.9-323.9-122.9z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2252"
				d="m2010.4 68.3c-8.2 0-642.7-1-677.9-1-36.6 0-302.1 1-309 1-649.9 0-1005.1-26.7-706.5 113.2 125.5 58.6 184 89.2 208.4 89.2 0 0 601.7-11.5 802.3-11 201.9 0.5 807.2 15.2 807.2 15.2 29.1-4.2 78-23.2 198.3-86.3 236.2-124.8 104.1-120.3-322.8-120.3z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2253"
				d="m2006.3 72.1c-9.3 0-634.2-1.2-673.9-1.2-41.1 0-305.9 1.2-313.6 1.2-636.2 0-987.2-26.2-696.1 110.7 122.4 57.3 179.5 87.3 203.6 87.3 0 0 601.1-11.3 801.5-10.8 201.6 0.5 806.3 15 806.3 15 28.6-4.2 76.5-22.8 193.8-84.5 230.3-122.1 97-117.7-321.6-117.7z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2254"
				d="m2002.1 75.9c-10.3 0-625.7-1.3-669.8-1.3-45.6 0-309.7 1.3-318.3 1.3-622.3 0-969.3-25.6-685.5 108.3 119.3 56 174.8 85.4 198.6 85.4 0 0 600.5-11.2 800.7-10.7 201.4 0.4 805.4 14.8 805.4 14.8 28.2-4.1 75-22.4 189.4-82.7 224.4-119.4 89.8-115.1-320.5-115.1z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2255"
				d="m1997.9 79.7c-11.3 0-617.2-1.4-665.6-1.4-50.3 0-313.6 1.4-323 1.4-608.6 0-951.4-25-675.1 105.8 116.2 54.8 170.3 83.6 193.7 83.6 0 0 600-11.2 800-10.7 201.1 0.5 804.5 14.6 804.5 14.6 27.8-3.9 73.6-21.7 184.9-80.9 218.7-116.2 82.7-112.4-319.4-112.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2256"
				d="m1993.8 83.5c-12.4 0-608.7-1.6-661.6-1.6-54.8 0-317.3 1.6-327.7 1.6-594.7 0-933.5-24.5-664.6 103.3 113.1 53.5 165.7 81.8 188.9 81.8 0 0 599.3-11.1 799.1-10.6 201 0.5 803.7 14.4 803.7 14.4 27.3-3.8 72.1-21.3 180.4-79.1 212.8-113.5 75.6-109.8-318.2-109.8z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2257"
				d="m1989.6 87.3c-13.4 0-600.2-1.7-657.4-1.7-59.4 0-321.2 1.7-332.4 1.7-581 0-915.6-23.9-654.2 100.9 110.1 52.2 161.2 79.8 184 79.8 0 0 598.8-10.9 798.4-10.4 200.7 0.4 802.8 14.2 802.8 14.2 26.9-3.8 70.5-20.8 175.9-77.3 206.9-110.8 68.4-107.2-317.1-107.2z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2258"
				d="m1985.4 91.1c-14.4 0-591.6-1.9-653.3-1.9-63.9 0-325 1.9-337.1 1.9-567.2 0-897.7-23.3-643.6 98.4 106.9 50.9 156.5 78 179 78 0 0 598.2-10.8 797.6-10.4 200.5 0.5 801.9 14.1 801.9 14.1 26.5-3.7 69.1-20.4 171.5-75.5 201.1-108.1 61.3-104.6-316-104.6z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2259"
				d="m1981.2 94.9c-15.4 0-583.1-2-649.1-2-68.6 0-328.9 2-341.8 2-553.4 0-879.8-22.7-633.2 96 103.9 49.6 152 76.1 174.2 76.1 0 0 597.6-10.7 796.8-10.3 200.3 0.4 801 13.8 801 13.8 26.1-3.5 67.5-19.9 167-73.6 195.2-105.4 54.1-102-314.9-102z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2260"
				d="m1977.1 98.7c-16.5 0-574.6-2.1-645.1-2.1-73.1 0-332.7 2.1-346.5 2.1-539.6 0-861.9-22.2-622.7 93.5 100.8 48.3 147.4 74.3 169.3 74.3 0 0 597-10.6 796-10.2 200.1 0.4 800.2 13.6 800.2 13.6 25.6-3.4 66-19.5 162.5-71.8 189.3-102.7 47-99.4-313.7-99.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2261"
				d="m1972.9 102.5c-17.5 0-566.1-2.3-641-2.3-77.6 0-336.5 2.3-351.1 2.3-525.8 0-844-21.6-612.2 91 97.7 47.1 142.8 72.4 164.3 72.4 0 0 596.5-10.5 795.3-10 199.8 0.4 799.3 13.4 799.3 13.4 25.1-3.4 64.5-19.1 158-70.1 183.4-99.9 39.8-96.7-312.6-96.7z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2262"
				d="m1968.7 106.2c-18.5 0-557.5-2.3-636.8-2.3-82.2 0-340.4 2.3-355.9 2.3-512 0-826.1-20.9-601.7 88.7 94.6 45.8 138.2 70.5 159.5 70.5 0 0 595.8-10.4 794.4-10 199.7 0.4 798.4 13.3 798.4 13.3 24.8-3.3 63-18.6 153.7-68.3 177.4-97.2 32.6-94.2-311.6-94.2z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2263"
				d="m1964.6 110c-19.6 0-549.1-2.5-632.8-2.5-86.8 0-344.1 2.5-360.5 2.5-498.2 0-808.4-19.9-591.3 86.2 91.4 44.7 133.7 68.7 154.6 68.7 0 0 595.3-10.3 793.7-9.9 199.4 0.4 797.5 13 797.5 13 24.3-3.1 61.5-18.1 149.2-66.4 171.5-94.5 25.4-91.6-310.4-91.6z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2264"
				d="m1960.4 113.8c-20.6 0-540.5-2.6-628.6-2.6-91.4 0-348 2.6-365.3 2.6-484.4 0-790.5-19.3-580.8 83.8 88.4 43.4 129.1 66.8 149.7 66.8 0 0 594.7-10.2 792.9-9.8 199.2 0.3 796.7 12.8 796.7 12.8 23.9-3 60-17.7 144.7-64.6 165.7-91.8 18.3-89-309.3-89z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2265"
				d="m1956.2 117.6c-21.6 0-532-2.7-624.5-2.7-95.9 0-351.8 2.7-369.9 2.7-470.6 0-772.7-18.7-570.3 81.3 85.2 42.2 124.5 64.9 144.8 64.9 0 0 594.1-10 792.1-9.7 199 0.4 795.8 12.7 795.8 12.7 23.4-3 58.4-17.3 140.2-62.8 159.8-89.1 11.2-86.4-308.2-86.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2266"
				d="m1952.1 121.4c-22.7 0-523.5-2.9-620.5-2.9-100.5 0-355.6 2.9-374.6 2.9-456.8 0-754.7-18.1-559.8 78.9 82.1 40.8 119.9 63 139.9 63 0 0 593.5-9.9 791.3-9.6 198.8 0.4 794.9 12.5 794.9 12.5 23-2.9 57-16.9 135.8-61 153.9-86.4 4-83.8-307-83.8z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2267"
				d="m1947.9 125.2c-23.7 0-515-3-616.3-3-105.1 0-359.5 3-379.3 3-443 0-736.9-17.5-549.4 76.4 79.1 39.6 115.4 61.2 135.1 61.2 0 0 592.8-9.9 790.5-9.5 198.5 0.3 794 12.2 794 12.2 22.6-2.7 55.5-16.4 131.3-59.2 148-83.6-3.1-81.1-305.9-81.1z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2268"
				d="m1943.7 129c-24.7 0-506.4-3.2-612.2-3.2-109.6 0-363.3 3.2-384 3.2-429.2 0-719-16.9-538.8 73.9 75.9 38.4 110.7 59.3 130.1 59.3 0 0 592.3-9.7 789.7-9.3 198.4 0.3 793.2 12 793.2 12 22.1-2.7 53.9-15.9 126.8-57.4 142.1-80.9-10.3-78.5-304.8-78.5z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2269"
				d="m1939.6 132.8c-25.8 0-498-3.3-608.1-3.3-114.2 0-367.2 3.3-388.7 3.3-415.4 0-701.1-16.3-528.4 71.5 72.9 37 106.2 57.4 125.2 57.4 0 0 591.7-9.6 789-9.3 198.1 0.3 792.3 11.9 792.3 11.9 21.7-2.6 52.4-15.5 122.3-55.6 136.3-78.2-17.4-75.9-303.6-75.9z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2270"
				d="m1935.4 136.6c-26.8 0-489.4-3.5-604-3.5-118.8 0-370.9 3.5-393.4 3.5-401.6 0-683.2-15.7-517.9 69 69.8 35.8 101.6 55.6 120.4 55.6 0 0 591.1-9.5 788.2-9.2 197.8 0.3 791.3 11.7 791.3 11.7 21.3-2.5 51-15.1 117.9-53.8 130.4-75.5-24.6-73.3-302.5-73.3z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2271"
				d="m1931.2 140.4c-27.8 0-480.9-3.6-599.8-3.6-123.4 0-374.8 3.6-398.1 3.6-387.9 0-665.4-15.1-507.5 66.6 66.7 34.5 97.1 53.7 115.5 53.7 0 0 590.5-9.4 787.4-9.1 197.7 0.3 790.5 11.4 790.5 11.4 20.8-2.3 49.4-14.6 113.4-51.9 124.5-72.8-31.7-70.7-301.4-70.7z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2272"
				d="m1927.1 144.2c-28.9 0-472.4-3.7-595.8-3.7-127.9 0-378.6 3.7-402.8 3.7-374 0-647.4-14.5-496.9 64.1 63.6 33.2 92.4 51.8 110.5 51.8 0 0 590-9.2 786.7-9 197.4 0.3 789.6 11.3 789.6 11.3 20.4-2.3 47.9-14.2 108.9-50.2 118.6-70-38.9-68-300.2-68z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2273"
				d="m1922.9 147.9c-29.9 0-463.9-3.8-591.7-3.8-132.4 0-382.4 3.8-407.4 3.8-360.3 0-629.6-13.8-486.5 61.8 60.5 31.9 87.9 49.9 105.7 49.9 0 0 589.3-9.2 785.8-8.9 197.2 0.3 788.7 11.1 788.7 11.1 20-2.2 46.5-13.8 104.5-48.4 112.8-67.3-46-65.5-299.1-65.5z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2274"
				d="m1918.7 151.7c-30.9 0-455.4-3.9-587.5-3.9-137.1 0-386.3 3.9-412.2 3.9-346.4 0-611.7-13.2-476 59.3 57.4 30.7 83.3 48.1 100.8 48.1 0 0 588.8-9.1 785.1-8.8 196.9 0.2 787.8 10.9 787.8 10.9 19.6-2.1 44.9-13.3 100-46.6 106.9-64.6-53.2-62.9-298-62.9z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2275"
				d="m1914.6 155.5c-32 0-446.9-4.1-583.5-4.1-141.6 0-390.1 4.1-416.8 4.1-332.7 0-593.8-12.6-465.5 56.8 54.3 29.4 78.7 46.3 95.8 46.3 0 0 588.2-9 784.3-8.7 196.8 0.2 787 10.6 787 10.6 19.1-1.9 43.4-12.8 95.5-44.7 101-61.9-60.3-60.3-296.8-60.3z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2276"
				d="m1910.4 159.3c-33 0-438.4-4.2-579.3-4.2-146.2 0-394 4.2-421.5 4.2-318.9 0-576-12-455.1 54.4 51.2 28.1 74.1 44.3 91 44.3 0 0 587.6-8.8 783.5-8.6 196.5 0.3 786.1 10.5 786.1 10.5 18.7-1.9 41.9-12.4 91-42.9 95.1-59.2-67.4-57.7-295.7-57.7z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2277"
				d="m1906.2 163.1c-34 0-429.8-4.3-575.2-4.3-150.7 0-397.8 4.3-426.2 4.3-305.1 0-558.1-11.4-444.6 51.9 48.1 26.9 69.6 42.5 86.1 42.5 0 0 587-8.7 782.7-8.5 196.3 0.2 785.2 10.3 785.2 10.3 18.3-1.8 40.5-12 86.6-41.1 89.3-56.5-74.6-55.1-294.6-55.1z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2278"
				d="m1902 166.9c-35 0-421.3-4.5-571.1-4.5-155.3 0-401.5 4.5-430.8 4.5-291.3 0-540.2-10.8-434.2 49.5 45.1 25.6 65 40.6 81.2 40.6 0 0 586.5-8.6 782-8.4 196.1 0.2 784.3 10.1 784.3 10.1 17.8-1.7 38.9-11.6 82.1-39.4 83.4-53.7-81.7-52.4-293.5-52.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2279"
				d="m1897.9 170.7c-36.1 0-412.8-4.6-567-4.6-159.9 0-405.4 4.6-435.6 4.6-277.5 0-522.3-10.2-423.6 47 41.9 24.3 60.4 38.7 76.3 38.7 0 0 585.8-8.4 781.1-8.3 195.9 0.2 783.5 9.9 783.5 9.9 17.4-1.6 37.4-11 77.6-37.5 77.5-51-88.9-49.8-292.3-49.8z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2280"
				d="m1893.7 174.5c-37.1 0-404.3-4.8-562.9-4.8-164.4 0-409.2 4.8-440.2 4.8-263.7 0-504.5-9.6-413.2 44.5 38.8 23.1 55.8 36.9 71.4 36.9 0 0 585.3-8.4 780.4-8.2 195.6 0.2 782.6 9.7 782.6 9.7 16.9-1.5 35.9-10.6 73.1-35.7 71.7-48.3-96-47.2-291.2-47.2z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2281"
				d="m1889.5 178.3c-38.1 0-395.7-4.9-558.7-4.9-169.1 0-413.1 4.9-445 4.9-249.9 0-486.6-9-402.7 42.1 35.7 21.8 51.3 35 66.5 35 0 0 584.7-8.3 779.6-8.1 195.5 0.2 781.7 9.5 781.7 9.5 16.6-1.4 34.5-10.2 68.7-33.9 65.8-45.6-103.2-44.6-290.1-44.6z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2282"
				d="m1885.4 182.1c-39.2 0-387.3-5-554.7-5-173.6 0-416.9 5-449.6 5-236.2 0-468.8-8.5-392.2 39.6 32.6 20.5 46.6 33.2 61.6 33.2 0 0 584.1-8.2 778.8-8 195.2 0.1 780.8 9.2 780.8 9.2 16.1-1.2 32.9-9.7 64.2-32 60-42.9-110.3-42-288.9-42z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2283"
				d="m1881.2 185.9c-40.2 0-378.7-5.2-550.5-5.2-178.2 0-420.8 5.2-454.4 5.2-222.3 0-450.8-7.9-381.7 37.2 29.5 19.2 42.1 31.2 56.7 31.2 0 0 583.5-8 778-7.9 195 0.2 780 9.1 780 9.1 15.6-1.2 31.4-9.3 59.7-30.2 54.1-40.2-117.5-39.4-287.8-39.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2284"
				d="m1877 189.6c-41.2 0-370.2-5.2-546.4-5.2-182.7 0-424.6 5.2-459 5.2-208.6 0-433-7.2-371.3 34.8 26.4 18 37.5 29.4 51.9 29.4 0 0 582.9-7.9 777.2-7.8 194.8 0.1 779.1 8.9 779.1 8.9 15.2-1.1 29.9-8.9 55.2-28.5 48.3-37.4-124.6-36.8-286.7-36.8z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2285"
				d="m1872.9 193.4c-42.3 0-361.7-5.4-542.4-5.4-187.3 0-428.3 5.4-463.7 5.4-194.7 0-415.1-6.6-360.8 32.4 23.3 16.6 33 27.5 47 27.5 0 0 582.3-7.8 776.4-7.7 194.6 0.1 778.2 8.7 778.2 8.7 14.8-1 28.5-8.4 50.8-26.7 42.5-34.7-131.7-34.2-285.5-34.2z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2286"
				d="m1868.7 197.2c-43.3 0-353.2-5.5-538.2-5.5-191.9 0-432.2 5.5-468.4 5.5-181 0-397.4-6-350.3 29.9 20.2 15.4 28.3 25.7 42 25.7 0 0 581.8-7.8 775.7-7.7 194.3 0.2 777.3 8.5 777.3 8.5 14.4-0.8 27-7.9 46.3-24.8 36.7-32.1-138.9-31.6-284.4-31.6z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2287"
				d="m1864.5 201c-44.3 0-344.6-5.6-534.1-5.6-196.4 0-436 5.6-473.1 5.6-167.1 0-379.5-5.4-339.8 27.4 17.1 14.2 23.8 23.8 37.2 23.8 0 0 581.1-7.6 774.8-7.5 194.2 0.1 776.5 8.3 776.5 8.3 13.9-0.8 25.5-7.5 41.8-23 30.9-29.4-146-29-283.3-29z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2288"
				d="m1860.4 204.8c-45.4 0-336.2-5.8-530-5.8-201 0-439.9 5.8-477.8 5.8-153.4 0-361.7-4.8-329.4 25 14 12.8 19.2 21.9 32.3 21.9 0 0 580.6-7.5 774.1-7.4 193.9 0.1 775.6 8.1 775.6 8.1 13.5-0.7 24.1-7.1 37.3-21.2 25.2-26.8-153.2-26.4-282.1-26.4z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2289"
				d="m1856.2 208.6c-46.4 0-327.6-5.9-525.9-5.9-205.6 0-443.7 5.9-482.5 5.9-139.5 0-343.9-4.3-318.8 22.5 10.8 11.6 14.6 20.1 27.3 20.1 0 0 580-7.4 773.3-7.3 193.7 0 774.7 7.9 774.7 7.9 13.1-0.6 22.7-6.8 32.9-19.4 19.5-24.2-160.3-23.8-281-23.8z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2290"
				d="m1852 212.4c-47.4 0-319.1-6.1-521.8-6.1-210.1 0-447.5 6.1-487.1 6.1-125.8 0-326.2-3.8-308.4 20.1 7.6 10.2 10 18.1 22.5 18.1 0 0 579.4-7.2 772.5-7.2 193.5 0.1 773.8 7.7 773.8 7.7 12.6-0.5 21.3-6.4 28.4-17.6 13.9-21.7-167.5-21.1-279.9-21.1z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2291"
				d="m1847.9 216.2c-48.5 0-310.7-6.2-517.7-6.2-214.7 0-451.4 6.2-491.9 6.2-111.9 0-308.5-3.5-297.9 17.6 4.5 8.9 5.5 16.3 17.6 16.3 0 0 578.8-7.1 771.7-7.1 193.3 0.1 773 7.5 773 7.5 12.2-0.4 19.9-6.1 23.9-15.8 8.3-19.4-174.6-18.5-278.7-18.5z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2292"
				d="m1843.7 220c-49.5 0-302.1-6.4-513.6-6.4-219.2 0-455.1 6.4-496.5 6.4-98.2 0-290.8-3.3-287.5 15.2 1.4 7.4 0.9 14.4 12.7 14.4 0 0 578.3-7.1 771-7 193 0 772.1 7.3 772.1 7.3 11.7-0.3 18.3-6.1 19.4-14 2.5-17.5-181.8-15.9-277.6-15.9z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2293"
				d="m1839.5 223.8c-50.5 0-293.6-6.5-509.4-6.5-223.9 0-459 6.5-501.3 6.5-84.3 0-272.6-3.4-276.9 12.7-1.6 5.9-3.7 12.6 7.8 12.6 0 0 577.6-7 770.1-7 192.8 0.1 771.2 7.2 771.2 7.2 11.4-0.2 16.6-6.1 15-12.2-3.9-15.8-188.9-13.3-276.5-13.3z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2294"
				d="m1835.4 227.6c-51.5 0-285.1-6.6-505.4-6.6-228.4 0-462.8 6.6-505.9 6.6-70.6 0-253.9-2.9-266.5 10.2-4.4 4.6-8.3 10.7 2.9 10.7 0 0 577.1-6.8 769.4-6.8 192.6 0 770.3 6.9 770.3 6.9 10.9-0.1 14.4-5.8 10.5-10.3-11.1-13.2-196-10.7-275.3-10.7z"
			/>
			<path
				id="&lt;Path&gt;"
				className="s2295"
				d="m1831.2 231.3c-52.5 0-276.6-6.7-501.2-6.7-233 0-466.7 6.7-510.7 6.7-56.8 0-235.4-1.8-256 7.9-7.2 3.4-12.8 8.8-2 8.8 0 0 576.5-6.7 768.7-6.7 192.3 0 769.4 6.7 769.4 6.7 10.4 0 12.5-5.1 6-8.5-18-9.7-203.2-8.2-274.2-8.2z"
			/>
		</g>
	);
};