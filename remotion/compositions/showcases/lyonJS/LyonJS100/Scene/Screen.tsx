import {interpolate, useCurrentFrame} from 'remotion';

export const Screen: React.FC = () => {
	const frame = useCurrentFrame();

	const lightWall = interpolate(
		frame,
		[0, 30, 31, 60, 61, 70, 71, 80, 81, 90, 91, 120, 160],
		[0.07, 0.07, 0.12, 0.12, 0.18, 0.18, 0.26, 0.26, 0.32, 0.32, 0.5, 0.5, 0.9],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		},
	);

	return (
		<g id="screen" style={{opacity: lightWall}}>
			<g id="&lt;Group&gt;">
				<path
					id="&lt;Path&gt;"
					className="s2105"
					d="m2041.4 1002.3c-474.2-14.2-948.5-14.2-1422.6 0q-10.6-332.8-21.3-665.7c488.4-14.6 976.8-14.6 1465.1 0q-10.6 332.9-21.2 665.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2106"
					d="m598.6 337.1c487.6-14.6 975.4-14.6 1463 0-0.2 9.6-0.3 19.4-0.6 29.1q-10.2 317.7-20.3 635.3c-9.1-0.1-18.3-0.2-27.6-0.5-455.3-13.1-910.7-13.1-1366 0-9.3 0.3-18.5 0.4-27.7 0.5q-10.1-317.6-20.2-635.3c-0.3-9.7-0.5-19.5-0.6-29.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2107"
					d="m599.7 337.6c486.9-14.6 973.9-14.6 1460.8 0 0.1 9.4 0.1 19.1-0.2 28.9q-10.2 317.1-20.3 634.1c-8.9 0.1-18.1 0.2-27.4-0.1-455-13.1-910.1-13.1-1365 0-9.3 0.3-18.5 0.2-27.5 0.1q-10.1-317-20.2-634.1c-0.3-9.8-0.3-19.5-0.2-28.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2108"
					d="m600.7 338.1c486.2-14.5 972.6-14.5 1458.7 0 0.3 9.2 0.5 18.9 0.2 28.6q-10.2 316.6-20.3 633.1c-8.7 0.3-17.9 0.4-27.2 0.2-454.6-13.1-909.4-13.1-1364 0-9.3 0.2-18.5 0.1-27.3-0.2q-10.1-316.5-20.2-633c-0.3-9.8-0.2-19.5 0.1-28.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2109"
					d="m601.8 338.6c485.5-14.5 971.1-14.5 1456.6 0 0.5 9 0.8 18.7 0.4 28.4q-10 316-20.1 631.9c-8.6 0.5-17.8 0.8-27.1 0.6-454.3-13.1-908.7-13.1-1363 0-9.3 0.2-18.5-0.1-27.1-0.6q-10.1-315.9-20.2-631.9c-0.3-9.7 0-19.4 0.5-28.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2110"
					d="m602.8 339.1c484.8-14.5 969.8-14.5 1454.5 0 0.7 8.8 1.1 18.4 0.8 28.2q-10 315.4-20.1 630.8c-8.4 0.7-17.6 1.1-26.9 0.9-454-13.1-908.1-13.1-1362.1 0-9.3 0.2-18.4-0.2-26.8-0.9q-10.1-315.4-20.2-630.8c-0.3-9.8 0.2-19.4 0.8-28.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2111"
					d="m603.9 339.6c484.1-14.5 968.3-14.5 1452.4 0 0.8 8.7 1.4 18.2 1.1 27.9q-10 314.9-20.1 629.8c-8.2 0.8-17.4 1.4-26.7 1.1-453.6-13-907.4-13-1361.1 0-9.3 0.3-18.4-0.3-26.6-1.1q-10.1-314.9-20.2-629.8c-0.3-9.7 0.3-19.2 1.2-27.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2112"
					d="m604.9 340.1c483.4-14.4 966.9-14.4 1450.3 0 1.1 8.5 1.8 18 1.5 27.7q-10 314.3-20.1 628.6c-8 1-17.1 1.8-26.5 1.5-453.3-13-906.7-13-1360.1 0-9.3 0.3-18.4-0.5-26.5-1.5q-10-314.3-20.1-628.6c-0.3-9.7 0.5-19.2 1.5-27.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2113"
					d="m606 340.6c482.7-14.4 965.5-14.4 1448.2 0 1.2 8.3 2.1 17.7 1.8 27.4q-10 313.8-20.1 627.6c-7.8 1.2-16.9 2.1-26.2 1.8-453.1-13-906.2-13-1359.2 0-9.3 0.3-18.4-0.6-26.3-1.8q-10-313.8-20.1-627.6c-0.3-9.7 0.6-19.1 1.9-27.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2114"
					d="m607 341.1c482-14.4 964.1-14.4 1446.1 0 1.5 8.1 2.5 17.5 2.2 27.2q-10 313.2-20.1 626.4c-7.7 1.4-16.7 2.5-26 2.2-452.7-13-905.5-13-1358.2 0-9.3 0.3-18.4-0.8-26.1-2.2q-10-313.2-20-626.4c-0.4-9.7 0.7-19.1 2.1-27.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2115"
					d="m608.1 341.6c481.3-14.4 962.7-14.4 1444 0 1.6 7.9 2.8 17.3 2.5 26.9q-10 312.7-20 625.4c-7.6 1.6-16.6 2.8-25.9 2.5-452.4-13-904.9-13-1357.2 0-9.4 0.3-18.4-0.9-25.9-2.5q-10-312.7-20-625.4c-0.3-9.6 0.9-19 2.5-26.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2116"
					d="m609.1 342c480.6-14.2 961.3-14.2 1441.9 0 1.8 7.8 3.2 17.1 2.9 26.8q-10 312.1-20 624.2c-7.4 1.8-16.4 3.2-25.7 2.9-452-13-904.2-13-1356.2 0-9.4 0.3-18.4-1.1-25.7-2.9q-10-312.1-20-624.2c-0.3-9.7 1-19 2.8-26.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2117"
					d="m610.2 342.5c479.9-14.2 959.9-14.2 1439.8 0 2 7.6 3.5 16.9 3.2 26.5q-10 311.6-20 623.2c-7.2 1.9-16.2 3.4-25.5 3.2-451.7-13-903.5-13-1355.2 0-9.4 0.2-18.4-1.3-25.5-3.2q-10-311.6-20-623.2c-0.3-9.6 1.2-18.9 3.2-26.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2118"
					d="m611.3 343c479.1-14.2 958.4-14.2 1437.6 0 2.2 7.4 3.9 16.6 3.6 26.3q-10 311-20 622c-7 2.2-15.9 3.8-25.3 3.6-451.4-13-902.9-13-1354.3 0-9.3 0.2-18.3-1.4-25.3-3.6q-9.9-311-19.9-622c-0.3-9.7 1.4-18.9 3.6-26.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2119"
					d="m612.3 343.5c478.5-14.1 957.1-14.1 1435.5 0 2.4 7.2 4.3 16.4 4 26.1q-10 310.4-20 620.9c-6.8 2.3-15.7 4.1-25.1 3.9-451-13-902.2-13-1353.3 0-9.3 0.2-18.3-1.6-25.1-3.9q-9.9-310.5-19.9-620.9c-0.3-9.7 1.5-18.9 3.9-26.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2120"
					d="m613.4 344c477.7-14.1 955.6-14.1 1433.4 0 2.6 7 4.6 16.2 4.3 25.8q-10 309.9-20 619.8c-6.6 2.6-15.5 4.5-24.9 4.2-450.7-12.9-901.5-12.9-1352.3 0-9.3 0.3-18.2-1.6-24.9-4.2q-9.9-309.9-19.9-619.8c-0.3-9.6 1.7-18.8 4.3-25.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2121"
					d="m614.4 344.5c477.1-14.1 954.3-14.1 1431.3 0 2.8 6.8 5 15.9 4.7 25.6q-10 309.3-19.9 618.7c-6.5 2.7-15.4 4.8-24.7 4.5-450.5-12.9-901-12.9-1351.4 0-9.4 0.3-18.2-1.8-24.7-4.5q-9.9-309.4-19.9-618.7c-0.3-9.7 1.8-18.8 4.6-25.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2122"
					d="m615.5 345c476.3-14.1 952.8-14.1 1429.2 0 3 6.6 5.3 15.7 4.9 25.3q-9.9 308.8-19.8 617.6c-6.3 2.9-15.2 5.2-24.5 4.9-450.1-12.9-900.3-12.9-1350.4 0-9.4 0.3-18.2-2-24.5-4.9q-10-308.8-19.9-617.6c-0.3-9.6 2-18.7 5-25.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2123"
					d="m616.5 345.5c475.7-14 951.5-14 1427.1 0 3.2 6.4 5.6 15.5 5.3 25.1q-9.9 308.2-19.8 616.5c-6.1 3.1-14.9 5.5-24.3 5.2-449.8-12.9-899.7-12.9-1349.4 0-9.4 0.3-18.2-2.1-24.3-5.2q-10-308.3-19.9-616.5c-0.3-9.6 2.2-18.7 5.3-25.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2124"
					d="m617.6 346c474.9-14 950-14 1425 0 3.3 6.2 5.9 15.2 5.6 24.8q-9.9 307.7-19.8 615.4c-5.9 3.3-14.7 5.9-24.1 5.6-449.4-12.9-899-12.9-1348.4 0-9.4 0.3-18.2-2.3-24.1-5.6q-10-307.7-19.9-615.4c-0.3-9.6 2.3-18.6 5.7-24.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2125"
					d="m618.6 346.5c474.3-14 948.7-14 1422.9 0 3.6 6 6.3 15 6 24.6q-9.9 307.1-19.8 614.3c-5.7 3.5-14.5 6.2-23.9 5.9-449.1-12.9-898.3-12.9-1347.4 0-9.4 0.3-18.2-2.4-24-5.9q-9.9-307.2-19.8-614.3c-0.3-9.6 2.5-18.6 6-24.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2125"
					d="m619.7 347c473.5-14 947.2-14 1420.8 0 3.7 5.8 6.6 14.8 6.3 24.3q-9.9 306.6-19.8 613.2c-5.5 3.7-14.3 6.5-23.7 6.3-448.8-12.9-897.7-12.9-1346.5 0-9.3 0.2-18.1-2.6-23.7-6.3q-9.9-306.6-19.8-613.2c-0.3-9.5 2.6-18.5 6.4-24.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2126"
					d="m620.7 347.4c472.9-13.8 945.9-13.8 1418.7 0 4 5.7 7 14.6 6.7 24.2q-9.9 306-19.7 612.1c-5.4 3.8-14.2 6.8-23.6 6.6-448.4-12.9-897-12.9-1345.5 0-9.4 0.2-18.1-2.8-23.5-6.6q-9.9-306.1-19.7-612.1c-0.4-9.6 2.7-18.5 6.6-24.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2127"
					d="m621.8 347.9c472.1-13.8 944.4-13.8 1416.6 0 4.1 5.5 7.3 14.4 7 23.9q-9.9 305.5-19.7 611c-5.3 4.1-14 7.2-23.4 7-448.1-12.9-896.3-12.9-1344.5 0-9.4 0.2-18.1-2.9-23.3-6.9q-9.9-305.5-19.7-611c-0.4-9.6 2.9-18.5 7-24z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2128"
					d="m622.9 348.4c471.4-13.8 943-13.8 1414.4 0 4.3 5.3 7.7 14.2 7.4 23.7q-9.9 305-19.7 609.9c-5.1 4.2-13.7 7.5-23.2 7.2-447.8-12.8-895.7-12.8-1343.5 0-9.4 0.3-18.1-3-23.1-7.2q-9.9-304.9-19.7-609.9c-0.3-9.5 3-18.4 7.4-23.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2129"
					d="m623.9 348.9c470.7-13.8 941.6-13.8 1412.4 0 4.5 5.1 8 13.9 7.7 23.5q-9.9 304.4-19.7 608.8c-4.9 4.4-13.5 7.8-22.9 7.5-447.5-12.8-895.1-12.8-1342.6 0-9.4 0.3-18.1-3.1-22.9-7.5q-9.9-304.4-19.7-608.8c-0.3-9.6 3.2-18.4 7.7-23.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2130"
					d="m625 349.4c470-13.7 940.2-13.7 1410.2 0 4.7 4.9 8.4 13.7 8.1 23.2q-9.8 303.9-19.7 607.7c-4.7 4.6-13.3 8.2-22.7 7.9-447.2-12.8-894.5-12.8-1341.6 0-9.4 0.3-18.1-3.3-22.8-7.9q-9.8-303.8-19.6-607.7c-0.3-9.5 3.3-18.3 8.1-23.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2131"
					d="m626 349.9c469.3-13.7 938.8-13.7 1408.1 0 5 4.7 8.8 13.5 8.5 23q-9.8 303.3-19.7 606.6c-4.5 4.7-13.1 8.5-22.5 8.2-446.8-12.8-893.8-12.8-1340.6 0-9.5 0.3-18.1-3.5-22.6-8.2q-9.8-303.3-19.6-606.6c-0.3-9.5 3.5-18.2 8.4-23z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2132"
					d="m627.1 350.4c468.6-13.7 937.4-13.7 1406 0 5.1 4.6 9.1 13.2 8.8 22.7q-9.8 302.8-19.6 605.5c-4.4 5-13 8.9-22.4 8.6-446.5-12.8-893.1-12.8-1339.6 0-9.5 0.3-18-3.6-22.4-8.6q-9.8-302.7-19.6-605.5c-0.3-9.5 3.7-18.1 8.8-22.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2133"
					d="m628.1 350.9c467.9-13.6 936-13.6 1403.9 0 5.3 4.4 9.5 13 9.2 22.5q-9.8 302.2-19.6 604.4c-4.2 5.1-12.8 9.2-22.2 8.9-446.2-12.8-892.5-12.8-1338.7 0-9.4 0.3-17.9-3.8-22.1-8.9q-9.8-302.2-19.6-604.4c-0.3-9.5 3.8-18.1 9.1-22.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2134"
					d="m629.2 351.4c467.2-13.6 934.6-13.6 1401.8 0 5.5 4.2 9.8 12.7 9.4 22.2q-9.7 301.7-19.5 603.3c-4 5.4-12.5 9.5-22 9.3-445.8-12.8-891.8-12.8-1337.7 0-9.4 0.2-17.9-3.9-21.9-9.3q-9.8-301.6-19.6-603.3c-0.3-9.4 4-18 9.5-22.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2134"
					d="m630.2 351.9c466.6-13.6 933.2-13.6 1399.7 0 5.7 4 10.1 12.5 9.8 22q-9.7 301.1-19.5 602.2c-3.8 5.5-12.3 9.8-21.8 9.6-445.5-12.8-891.1-12.8-1336.7 0-9.4 0.2-17.9-4.1-21.7-9.6q-9.8-301.1-19.6-602.2c-0.3-9.5 4.2-18 9.8-22z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2135"
					d="m631.3 352.4c465.8-13.6 931.8-13.6 1397.6 0 5.9 3.8 10.4 12.3 10.1 21.7q-9.7 300.6-19.5 601.1c-3.6 5.7-12.1 10.2-21.6 9.9-445.2-12.7-890.5-12.7-1335.7 0-9.4 0.3-17.9-4.2-21.6-9.9q-9.7-300.5-19.5-601.1c-0.3-9.4 4.3-17.9 10.2-21.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2136"
					d="m632.3 352.9c465.2-13.5 930.4-13.5 1395.5 0 6.1 3.6 10.8 12 10.5 21.5q-9.7 300-19.5 600c-3.4 5.9-11.9 10.5-21.3 10.2-444.9-12.7-889.9-12.7-1334.8 0-9.5 0.3-17.9-4.3-21.4-10.2q-9.7-300-19.5-600c-0.3-9.5 4.5-17.9 10.5-21.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2137"
					d="m633.4 353.3c464.4-13.4 929-13.4 1393.4 0 6.2 3.5 11.1 11.9 10.8 21.3q-9.7 299.5-19.4 598.9c-3.3 6.1-11.8 10.9-21.2 10.6-444.6-12.7-889.3-12.7-1333.8 0-9.5 0.3-17.9-4.5-21.2-10.6q-9.7-299.4-19.5-598.8c-0.3-9.5 4.6-17.9 10.9-21.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2138"
					d="m634.5 353.8c463.7-13.4 927.5-13.4 1391.2 0 6.5 3.3 11.5 11.7 11.2 21.1q-9.7 298.9-19.4 597.8c-3.1 6.3-11.5 11.2-21 10.9-444.2-12.7-888.6-12.7-1332.8 0-9.5 0.3-17.9-4.6-21-10.9q-9.7-298.9-19.5-597.8c-0.3-9.4 4.8-17.8 11.3-21.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2139"
					d="m635.5 354.3c463-13.4 926.2-13.4 1389.2 0 6.6 3.1 11.8 11.4 11.5 20.9q-9.7 298.3-19.4 596.6c-3 6.5-11.3 11.6-20.8 11.3-443.9-12.7-887.9-12.7-1331.8 0-9.5 0.3-17.9-4.8-20.8-11.3q-9.7-298.3-19.4-596.6c-0.4-9.5 4.9-17.8 11.5-20.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2140"
					d="m636.6 354.8c462.3-13.3 924.7-13.3 1387 0 6.8 2.9 12.2 11.2 11.9 20.6q-9.7 297.8-19.4 595.6c-2.8 6.6-11.1 11.9-20.6 11.6-443.6-12.6-887.3-12.7-1330.8 0-9.5 0.3-17.9-5-20.6-11.6q-9.7-297.8-19.4-595.6c-0.3-9.4 5-17.7 11.9-20.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2141"
					d="m637.6 355.3c461.6-13.3 923.4-13.3 1384.9 0 7.1 2.7 12.6 11 12.3 20.4q-9.7 297.2-19.4 594.4c-2.6 6.9-10.9 12.2-20.4 12-443.2-12.6-886.6-12.6-1329.9 0-9.4 0.2-17.8-5.1-20.4-12q-9.6-297.2-19.3-594.4c-0.3-9.4 5.2-17.7 12.2-20.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2142"
					d="m638.7 355.8c460.9-13.3 921.9-13.3 1382.8 0 7.2 2.5 12.9 10.7 12.6 20.1q-9.7 296.7-19.4 593.4c-2.4 7-10.7 12.5-20.2 12.3-442.9-12.6-885.9-12.6-1328.9 0-9.5 0.2-17.8-5.3-20.2-12.3q-9.6-296.7-19.3-593.4c-0.3-9.4 5.3-17.6 12.6-20.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2143"
					d="m639.7 356.3c460.2-13.3 920.5-13.3 1380.7 0 7.5 2.3 13.3 10.5 13 19.9q-9.7 296.1-19.3 592.2c-2.3 7.3-10.6 12.9-20.1 12.7-442.6-12.6-885.3-12.6-1327.9 0-9.5 0.2-17.8-5.4-20-12.6q-9.7-296.2-19.3-592.3c-0.3-9.4 5.5-17.6 12.9-19.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2144"
					d="m640.8 356.8c459.5-13.2 919.1-13.2 1378.6 0 7.6 2.1 13.6 10.3 13.3 19.6q-9.7 295.6-19.3 591.2c-2.1 7.4-10.3 13.2-19.8 12.9-442.3-12.5-884.7-12.5-1327 0-9.5 0.3-17.7-5.5-19.8-12.9q-9.7-295.6-19.3-591.2c-0.3-9.3 5.7-17.5 13.3-19.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2145"
					d="m641.8 357.3c458.8-13.2 917.7-13.2 1376.5 0 7.8 1.9 14 10 13.7 19.4q-9.7 295-19.3 590.1c-1.9 7.5-10.1 13.5-19.6 13.2-442-12.5-884.1-12.5-1326 0-9.5 0.3-17.7-5.7-19.6-13.2q-9.7-295.1-19.3-590.1c-0.3-9.4 5.8-17.5 13.6-19.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2146"
					d="m642.9 357.8c458.1-13.2 916.3-13.2 1374.4 0 8 1.7 14.3 9.8 14 19.1q-9.7 294.5-19.3 589c-1.7 7.8-9.9 13.9-19.4 13.6-441.6-12.5-883.4-12.5-1325 0-9.5 0.3-17.7-5.8-19.4-13.6q-9.7-294.5-19.3-589c-0.3-9.3 6-17.4 14-19.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2147"
					d="m643.9 358.3c457.4-13.1 914.9-13.1 1372.3 0 8.2 1.5 14.6 9.6 14.3 18.9q-9.6 293.9-19.2 587.9c-1.5 7.9-9.7 14.2-19.2 13.9-441.3-12.5-882.7-12.5-1324 0-9.6 0.3-17.7-6-19.3-13.9q-9.6-294-19.2-587.9c-0.3-9.3 6.1-17.4 14.3-18.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2148"
					d="m645 358.7c456.7-13 913.5-13 1370.2 0 8.4 1.4 14.9 9.4 14.6 18.8q-9.6 293.3-19.2 586.7c-1.3 8.2-9.5 14.6-19 14.3-441-12.5-882.1-12.5-1323 0-9.6 0.3-17.7-6.1-19.1-14.3q-9.6-293.4-19.2-586.7c-0.3-9.4 6.3-17.4 14.7-18.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2149"
					d="m646.1 359.2c455.9-13 912-13 1368 0 8.6 1.2 15.3 9.2 15 18.5q-9.6 292.8-19.1 585.7c-1.2 8.3-9.3 14.9-18.9 14.6-440.6-12.5-881.4-12.5-1322.1 0-9.5 0.3-17.6-6.3-18.8-14.6q-9.6-292.9-19.2-585.7c-0.3-9.3 6.5-17.3 15.1-18.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2150"
					d="m647.1 359.7c455.3-13 910.7-13 1366 0 8.7 1 15.6 8.9 15.3 18.3q-9.6 292.2-19.1 584.5c-1 8.5-9.1 15.2-18.7 15-440.3-12.5-880.7-12.5-1321.1 0-9.5 0.2-17.6-6.5-18.6-15q-9.6-292.3-19.2-584.5c-0.3-9.3 6.6-17.3 15.4-18.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2151"
					d="m648.2 360.2c454.5-12.9 909.2-12.9 1363.8 0 9 0.8 16 8.7 15.7 18q-9.5 291.7-19.1 583.5c-0.8 8.7-8.9 15.5-18.5 15.3-440-12.5-880.1-12.5-1320.1 0-9.5 0.2-17.6-6.6-18.4-15.3q-9.6-291.8-19.2-583.5c-0.3-9.3 6.8-17.2 15.8-18z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2152"
					d="m649.2 360.7c453.9-12.9 907.9-12.9 1361.7 0 9.2 0.7 16.4 8.5 16.1 17.8q-9.5 291.1-19.1 582.3c-0.7 8.9-8.7 15.9-18.2 15.7-439.7-12.5-879.5-12.5-1319.2 0-9.5 0.2-17.6-6.8-18.2-15.7q-9.6-291.1-19.1-582.3c-0.4-9.3 6.8-17.1 16-17.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2153"
					d="m650.3 361.2c453.1-12.9 906.4-12.9 1359.6 0 9.4 0.5 16.7 8.2 16.4 17.5q-9.5 290.7-19.1 581.3c-0.5 9.1-8.5 16.2-18 15.9-439.4-12.4-878.9-12.4-1318.2 0-9.6 0.3-17.6-6.8-18.1-15.9q-9.5-290.6-19-581.3c-0.3-9.3 7-17 16.4-17.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2154"
					d="m1988.7 975.4c-439-12.4-878.2-12.4-1317.2 0-9.6 0.3-17.6-7-17.9-16.3q-9.5-290-19-580.1c-0.3-9.3 7.2-17 16.7-17.3 452.5-12.9 905.1-12.9 1357.5 0 9.6 0.3 17.1 8 16.8 17.3q-9.5 290.1-19.1 580.1c-0.3 9.3-8.3 16.6-17.8 16.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2155"
					d="m1985 973.7c-436.6-12.4-873.3-12.4-1309.8 0-9.5 0.2-17.5-7-17.8-16.2q-9.4-288.5-18.9-576.9c-0.3-9.2 7.2-16.9 16.7-17.2 449.9-12.8 899.9-12.8 1349.8 0 9.5 0.3 17 8 16.7 17.2q-9.5 288.4-19 576.9c-0.3 9.2-8.2 16.4-17.7 16.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2155"
					d="m1981.2 971.9c-434-12.3-868.2-12.3-1302.3 0-9.4 0.3-17.3-6.9-17.6-16.1q-9.5-286.8-18.9-573.6c-0.3-9.2 7.1-16.8 16.6-17.1 447.3-12.7 894.8-12.7 1342.2 0 9.4 0.3 16.8 7.9 16.5 17.1q-9.4 286.8-18.8 573.6c-0.3 9.2-8.2 16.4-17.7 16.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2156"
					d="m1977.5 970.2c-431.6-12.3-863.3-12.3-1294.9 0-9.4 0.2-17.2-6.9-17.5-16.1q-9.4-285.1-18.8-570.3c-0.3-9.1 7.1-16.7 16.5-17 444.8-12.6 889.7-12.6 1334.5 0 9.4 0.3 16.8 7.9 16.5 17q-9.4 285.2-18.7 570.3c-0.3 9.1-8.2 16.3-17.6 16.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2156"
					d="m1973.8 968.4c-429.1-12.2-858.3-12.2-1287.4 0-9.4 0.3-17.2-6.9-17.5-15.9q-9.3-283.6-18.6-567.1c-0.3-9 7-16.6 16.4-16.9 442.2-12.6 884.6-12.6 1326.8 0 9.4 0.3 16.7 7.8 16.4 16.9q-9.3 283.5-18.6 567.1c-0.3 9-8.1 16.2-17.5 15.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2157"
					d="m1970.1 966.6c-426.6-12.1-853.4-12.1-1280 0-9.3 0.3-17.1-6.8-17.4-15.8q-9.2-281.9-18.5-563.8c-0.3-9 7-16.5 16.3-16.8 439.7-12.5 879.5-12.5 1319.2 0 9.3 0.3 16.6 7.8 16.3 16.8q-9.3 281.9-18.6 563.8c-0.2 9-8 16.1-17.3 15.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2157"
					d="m1966.4 964.9c-424.2-12.1-848.5-12.1-1272.6 0-9.2 0.2-17-6.8-17.3-15.8q-9.2-280.2-18.4-560.5c-0.3-8.9 7-16.4 16.2-16.7 437.1-12.4 874.4-12.4 1311.6 0 9.2 0.3 16.4 7.8 16.1 16.7q-9.2 280.3-18.4 560.5c-0.3 9-8 16-17.2 15.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2158"
					d="m1962.7 963.1c-421.7-11.9-843.5-11.9-1265.2 0-9.2 0.3-16.9-6.7-17.2-15.6q-9.1-278.6-18.3-557.3c-0.2-8.9 7-16.3 16.1-16.6 434.6-12.3 869.3-12.3 1303.9 0 9.2 0.3 16.4 7.7 16.1 16.6q-9.1 278.6-18.3 557.3c-0.3 8.9-8 15.9-17.1 15.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2158"
					d="m1958.9 961.4c-419.2-11.9-838.5-11.9-1257.7 0-9.1 0.2-16.7-6.7-17-15.6q-9.1-277-18.2-554c-0.3-8.8 6.8-16.2 16-16.5 432-12.2 864.2-12.2 1296.2 0 9.1 0.3 16.3 7.7 16 16.5q-9.1 277-18.2 554c-0.3 8.8-7.9 15.8-17.1 15.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2159"
					d="m1955.2 959.6c-416.7-11.8-833.5-11.8-1250.3 0-9 0.3-16.6-6.7-16.9-15.5q-9.1-275.3-18.1-550.6c-0.3-8.9 6.8-16.2 15.9-16.5 429.5-12.2 859.1-12.2 1288.6 0 9 0.3 16.1 7.6 15.9 16.4q-9.1 275.4-18.1 550.7c-0.3 8.8-7.9 15.8-17 15.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2159"
					d="m1951.5 957.8c-414.2-11.7-828.6-11.7-1242.8 0-9.1 0.3-16.6-6.6-16.9-15.3q-9-273.7-18-547.4c-0.3-8.8 6.8-16.1 15.8-16.4 427-12.1 854-12.1 1280.9 0 9 0.3 16.1 7.6 15.8 16.4q-9 273.7-17.9 547.4c-0.3 8.7-7.9 15.6-16.9 15.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2160"
					d="m1947.8 956.1c-411.8-11.7-823.7-11.7-1235.4 0-9 0.2-16.5-6.6-16.8-15.3q-8.9-272.1-17.8-544.1c-0.3-8.7 6.7-16 15.7-16.3 424.3-12 848.8-12 1273.2 0 9 0.3 16 7.6 15.7 16.3q-8.9 272-17.9 544.1c-0.2 8.7-7.7 15.5-16.7 15.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2160"
					d="m1944.1 954.3c-409.3-11.6-818.7-11.6-1228 0-8.9 0.3-16.4-6.5-16.7-15.2q-8.8-270.4-17.7-540.8c-0.3-8.7 6.7-15.9 15.6-16.2 421.8-11.9 843.8-11.9 1265.6 0 8.9 0.3 15.9 7.5 15.6 16.2q-8.9 270.4-17.8 540.8c-0.3 8.7-7.7 15.5-16.6 15.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2161"
					d="m1940.4 952.6c-406.9-11.6-813.8-11.6-1220.6 0-8.9 0.2-16.3-6.5-16.5-15.1q-8.9-268.8-17.7-537.6c-0.3-8.6 6.7-15.8 15.5-16 419.3-12 838.7-12 1257.9 0 8.9 0.2 15.8 7.4 15.6 16q-8.9 268.8-17.7 537.6c-0.3 8.6-7.7 15.3-16.5 15.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2161"
					d="m1936.6 950.8c-404.3-11.5-808.7-11.5-1213.1 0-8.8 0.3-16.1-6.5-16.4-15q-8.8-267.2-17.6-534.3c-0.3-8.6 6.7-15.7 15.5-15.9 416.7-11.9 833.5-11.9 1250.2 0 8.8 0.2 15.7 7.3 15.4 15.9q-8.7 267.1-17.5 534.3c-0.3 8.5-7.7 15.3-16.5 15z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2162"
					d="m1932.9 949c-401.8-11.4-803.8-11.4-1205.7 0-8.7 0.3-16-6.4-16.3-14.9q-8.7-265.5-17.4-531c-0.3-8.5 6.5-15.6 15.3-15.8 414.1-11.8 828.4-11.8 1242.6 0 8.7 0.2 15.6 7.3 15.3 15.8q-8.7 265.5-17.4 531c-0.3 8.5-7.6 15.2-16.4 14.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2162"
					d="m1929.2 947.3c-399.4-11.3-798.9-11.3-1198.2 0-8.7 0.2-16-6.4-16.3-14.8q-8.7-263.9-17.3-527.8c-0.3-8.4 6.5-15.5 15.2-15.7 411.6-11.7 823.3-11.7 1234.9 0 8.7 0.2 15.6 7.3 15.3 15.7q-8.7 263.9-17.4 527.8c-0.2 8.4-7.5 15-16.2 14.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2163"
					d="m1925.5 945.5c-396.9-11.2-793.9-11.2-1190.8 0-8.7 0.3-15.9-6.3-16.2-14.7q-8.6-262.2-17.2-524.5c-0.3-8.4 6.5-15.4 15.2-15.6 409-11.6 818.2-11.6 1227.2 0 8.7 0.2 15.4 7.2 15.2 15.6q-8.7 262.2-17.3 524.5c-0.2 8.4-7.5 15-16.1 14.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2163"
					d="m1921.8 943.8c-394.5-11.2-789-11.2-1183.4 0-8.6 0.2-15.8-6.3-16.1-14.7q-8.5-260.6-17.1-521.2c-0.2-8.3 6.5-15.3 15.1-15.5 406.5-11.6 813.1-11.6 1219.6 0 8.6 0.2 15.3 7.2 15 15.5q-8.5 260.6-17.1 521.2c-0.3 8.4-7.4 14.9-16 14.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2164"
					d="m1918.1 942c-392-11.1-784-11.1-1176 0-8.5 0.2-15.7-6.3-15.9-14.5q-8.5-259-17-518c-0.3-8.3 6.4-15.2 14.9-15.4 404-11.5 808-11.5 1211.9 0 8.6 0.2 15.3 7.1 15 15.4q-8.5 259-17 518c-0.3 8.2-7.4 14.7-15.9 14.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2164"
					d="m1914.3 940.2c-389.4-11-779-11-1168.5 0-8.5 0.3-15.5-6.2-15.8-14.4q-8.5-257.3-16.9-514.7c-0.3-8.2 6.4-15.1 14.8-15.3 401.4-11.4 802.9-11.4 1204.3 0 8.5 0.2 15.1 7.1 14.9 15.3q-8.5 257.4-16.9 514.7c-0.3 8.2-7.4 14.7-15.9 14.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2165"
					d="m1910.6 938.5c-387-11-774.1-11-1161.1 0-8.4 0.2-15.4-6.2-15.7-14.4q-8.4-255.7-16.8-511.4c-0.3-8.1 6.4-15 14.8-15.2 398.8-11.3 797.8-11.3 1196.6 0 8.4 0.2 15 7.1 14.8 15.2q-8.4 255.7-16.8 511.4c-0.3 8.2-7.4 14.6-15.8 14.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2165"
					d="m1906.9 936.7c-384.5-10.9-769.1-10.9-1153.6 0-8.4 0.3-15.4-6.1-15.7-14.2q-8.3-254.1-16.7-508.2c-0.2-8.1 6.3-14.9 14.7-15.1 396.3-11.3 792.7-11.3 1189 0 8.3 0.2 14.9 7 14.6 15.1q-8.3 254.1-16.7 508.2c-0.2 8.1-7.2 14.5-15.6 14.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2166"
					d="m1903.2 935c-382-10.9-764.2-10.9-1146.2 0-8.3 0.2-15.3-6.1-15.6-14.2q-8.3-252.4-16.5-504.8c-0.3-8.1 6.2-14.9 14.5-15.1 393.8-11.2 787.6-11.2 1181.3 0 8.3 0.2 14.9 7 14.6 15q-8.3 252.5-16.6 504.9c-0.2 8.1-7.2 14.4-15.5 14.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2166"
					d="m1899.5 933.2c-379.6-10.8-759.3-10.8-1138.8 0-8.3 0.2-15.2-6.1-15.4-14.1q-8.3-250.8-16.5-501.5c-0.3-8.1 6.2-14.8 14.5-15 391.1-11.1 782.4-11.1 1173.6 0 8.3 0.2 14.7 6.9 14.5 15q-8.3 250.7-16.5 501.5c-0.3 8-7.2 14.3-15.4 14.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2167"
					d="m1895.7 931.5c-377-10.7-754.2-10.7-1131.3-0.1-8.2 0.3-15.1-6-15.3-13.9q-8.2-249.2-16.4-498.3c-0.3-8 6.2-14.7 14.4-14.9 388.6-11 777.3-11 1166 0 8.2 0.2 14.6 6.9 14.4 14.9q-8.2 249.1-16.4 498.3c-0.3 7.9-7.1 14.2-15.4 14z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2167"
					d="m1892 929.7c-374.6-10.6-749.3-10.6-1123.9 0-8.1 0.2-14.9-6-15.2-13.9q-8.1-247.5-16.3-495c-0.2-7.9 6.2-14.6 14.3-14.8 386.1-10.9 772.3-10.9 1158.3 0 8.2 0.2 14.6 6.9 14.3 14.8q-8.1 247.5-16.2 495c-0.3 7.9-7.1 14.1-15.3 13.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2168"
					d="m1888.3 927.9c-372.1-10.5-744.3-10.5-1116.5 0-8.1 0.3-14.8-5.9-15.1-13.8q-8.1-245.8-16.1-491.7c-0.3-7.9 6.1-14.4 14.2-14.7 383.5-10.9 767.1-10.9 1150.6 0 8.1 0.3 14.5 6.8 14.2 14.7q-8.1 245.8-16.2 491.7c-0.2 7.9-7 14.1-15.1 13.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2168"
					d="m1884.6 926.2c-369.6-10.5-739.4-10.5-1109 0-8.1 0.2-14.8-5.9-15.1-13.7q-8-244.3-16-488.5c-0.3-7.8 6-14.3 14.1-14.6 380.9-10.8 762-10.8 1143 0 8 0.3 14.3 6.8 14.1 14.6q-8 244.2-16.1 488.4c-0.2 7.9-7 14-15 13.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2169"
					d="m1880.9 924.4c-367.2-10.4-734.5-10.4-1101.6 0-8 0.2-14.7-5.9-15-13.6q-7.9-242.6-15.9-485.2c-0.2-7.8 6-14.2 14-14.5 378.4-10.7 756.9-10.7 1135.3 0 8 0.3 14.3 6.7 14 14.5q-7.9 242.6-15.9 485.2c-0.2 7.7-6.9 13.8-14.9 13.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2169"
					d="m1877.2 922.7c-364.7-10.4-729.5-10.4-1094.2 0-7.9 0.2-14.6-5.9-14.8-13.6q-7.9-240.9-15.9-481.9c-0.2-7.7 6-14.1 14-14.4 375.8-10.6 751.8-10.6 1127.6 0 7.9 0.3 14.2 6.7 13.9 14.4q-7.9 241-15.8 481.9c-0.3 7.7-6.9 13.8-14.8 13.6z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2170"
					d="m1873.4 920.9c-362.2-10.3-724.5-10.3-1086.7 0-7.9 0.2-14.5-5.8-14.7-13.4q-7.9-239.4-15.7-478.7c-0.3-7.6 5.9-14 13.8-14.3 373.3-10.6 746.7-10.6 1120 0 7.9 0.3 14 6.7 13.8 14.3q-7.9 239.3-15.7 478.6c-0.3 7.7-6.9 13.7-14.8 13.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2170"
					d="m1869.7 919.1c-359.7-10.2-719.5-10.2-1079.3 0-7.8 0.3-14.3-5.7-14.6-13.3q-7.8-237.7-15.6-475.4c-0.3-7.6 5.9-13.9 13.7-14.2 370.8-10.5 741.6-10.5 1112.3 0 7.9 0.3 14 6.6 13.8 14.2q-7.8 237.7-15.6 475.4c-0.3 7.6-6.8 13.6-14.7 13.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2171"
					d="m1866 917.4c-357.2-10.2-714.6-10.2-1071.8 0-7.8 0.2-14.3-5.7-14.6-13.3q-7.7-236-15.5-472.1c-0.2-7.5 5.9-13.8 13.7-14 368.1-10.5 736.4-10.5 1104.6 0 7.8 0.2 13.9 6.5 13.6 14q-7.7 236.1-15.5 472.1c-0.2 7.6-6.7 13.5-14.5 13.3z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2171"
					d="m1862.3 915.6c-354.8-10-709.7-10-1064.4 0-7.8 0.2-14.2-5.7-14.5-13.1q-7.7-234.5-15.4-468.9c-0.2-7.5 5.9-13.7 13.6-13.9 365.6-10.4 731.4-10.4 1097 0 7.7 0.2 13.8 6.4 13.5 13.9q-7.7 234.4-15.4 468.8c-0.2 7.5-6.7 13.4-14.4 13.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2172"
					d="m1858.6 913.9c-352.3-10-704.7-10-1057 0-7.7 0.2-14.1-5.7-14.3-13.1q-7.7-232.8-15.3-465.6c-0.3-7.4 5.7-13.6 13.4-13.8 363.1-10.4 726.3-10.4 1089.4 0 7.6 0.2 13.6 6.4 13.4 13.8q-7.6 232.8-15.3 465.6c-0.2 7.4-6.7 13.3-14.3 13.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2172"
					d="m1854.9 912.1c-349.9-9.9-699.8-9.9-1049.6 0-7.6 0.2-14-5.6-14.2-13q-7.6-231.1-15.2-462.3c-0.3-7.3 5.7-13.5 13.3-13.7 360.6-10.3 721.2-10.3 1081.7 0 7.6 0.2 13.6 6.4 13.4 13.7q-7.6 231.2-15.2 462.3c-0.3 7.4-6.6 13.2-14.2 13z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2173"
					d="m1851.1 910.3c-347.3-9.8-694.7-9.8-1042.1 0-7.5 0.3-13.9-5.5-14.1-12.9q-7.5-229.4-15.1-458.9c-0.2-7.4 5.7-13.5 13.3-13.7 357.9-10.2 716-10.2 1074 0 7.6 0.2 13.5 6.3 13.2 13.6q-7.5 229.5-15 459c-0.3 7.4-6.6 13.2-14.2 12.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2173"
					d="m1847.4 908.6c-344.8-9.8-689.8-9.8-1034.7 0-7.5 0.2-13.8-5.5-14-12.8q-7.5-227.9-15-455.7c-0.2-7.3 5.7-13.4 13.2-13.6 355.4-10.1 710.9-10.1 1066.4 0 7.5 0.2 13.4 6.3 13.1 13.6q-7.5 227.8-14.9 455.7c-0.3 7.3-6.6 13-14.1 12.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2174"
					d="m1843.7 906.8c-342.4-9.7-684.9-9.7-1027.2 0-7.5 0.2-13.7-5.5-14-12.7q-7.4-226.2-14.8-452.4c-0.3-7.3 5.6-13.3 13-13.5 352.9-10 705.9-10 1058.7 0 7.5 0.2 13.3 6.2 13.1 13.5q-7.4 226.2-14.9 452.4c-0.2 7.2-6.4 12.9-13.9 12.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2174"
					d="m1840 905.1c-339.9-9.7-679.9-9.7-1019.8 0-7.4 0.2-13.6-5.5-13.9-12.7q-7.3-224.5-14.7-449.1c-0.2-7.2 5.6-13.2 13-13.4 350.3-10 700.7-10 1051 0 7.4 0.2 13.2 6.2 13 13.4q-7.4 224.6-14.8 449.1c-0.2 7.2-6.4 12.9-13.8 12.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2175"
					d="m1836.3 903.3c-337.5-9.6-675-9.6-1012.4 0-7.4 0.2-13.5-5.4-13.7-12.5q-7.4-223-14.7-445.9c-0.2-7.1 5.6-13.1 12.9-13.3 347.8-9.9 695.6-9.9 1043.4 0 7.3 0.2 13.1 6.2 12.8 13.3q-7.3 222.9-14.6 445.9c-0.2 7.1-6.4 12.7-13.7 12.5z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2175"
					d="m1832.6 901.5c-335-9.5-670-9.5-1005 0-7.3 0.3-13.4-5.3-13.6-12.4q-7.3-221.3-14.6-442.6c-0.2-7.1 5.5-13 12.8-13.2 345.2-9.8 690.5-9.8 1035.7 0 7.3 0.2 13 6.1 12.8 13.2q-7.3 221.3-14.5 442.6c-0.3 7.1-6.4 12.7-13.6 12.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2176"
					d="m1828.8 899.8c-332.4-9.4-665-9.4-997.5 0-7.2 0.2-13.3-5.3-13.5-12.4q-7.2-219.6-14.4-439.3c-0.3-7 5.4-12.9 12.7-13.1 342.6-9.7 685.4-9.7 1028 0 7.2 0.2 12.9 6.1 12.7 13.1q-7.2 219.7-14.4 439.3c-0.3 7.1-6.3 12.6-13.6 12.4z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2176"
					d="m1825.1 898c-330-9.3-660.1-9.3-990.1 0-7.1 0.2-13.2-5.3-13.4-12.2q-7.1-218.1-14.3-436.1c-0.2-7 5.4-12.8 12.6-13 340.1-9.7 680.3-9.7 1020.4 0 7.2 0.2 12.8 6 12.6 13q-7.2 218-14.4 436.1c-0.2 6.9-6.2 12.4-13.4 12.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2177"
					d="m1821.4 896.3c-327.5-9.3-655.1-9.3-982.6 0-7.2 0.2-13.1-5.3-13.4-12.2q-7.1-216.4-14.2-432.8c-0.2-6.9 5.4-12.7 12.5-12.9 337.6-9.6 675.2-9.6 1012.7 0 7.2 0.2 12.8 6 12.5 12.9q-7.1 216.4-14.2 432.8c-0.2 6.9-6.2 12.4-13.3 12.2z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2177"
					d="m1817.7 894.5c-325.1-9.2-650.2-9.2-975.2 0-7.1 0.2-13-5.2-13.2-12.1q-7.1-214.7-14.2-429.5c-0.2-6.8 5.4-12.6 12.5-12.8 334.9-9.5 670-9.5 1005 0 7.1 0.2 12.6 5.9 12.4 12.8q-7 214.8-14.1 429.5c-0.2 6.9-6.1 12.3-13.2 12.1z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2178"
					d="m1814 892.7c-322.6-9.1-645.2-9.1-967.8 0-7 0.2-12.9-5.1-13.1-11.9q-7-213.1-14-426.3c-0.3-6.8 5.3-12.5 12.3-12.7 332.4-9.4 664.9-9.4 997.4 0 7 0.2 12.5 5.9 12.3 12.7q-7 213.1-14 426.3c-0.2 6.8-6.1 12.1-13.1 11.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2178"
					d="m1810.3 891c-320.1-9.1-640.3-9.1-960.4 0-7 0.2-12.8-5.1-13-11.9q-7-211.5-13.9-423c-0.2-6.7 5.2-12.4 12.2-12.6 329.9-9.3 659.9-9.3 989.7 0 7 0.2 12.5 5.9 12.3 12.6q-7 211.5-13.9 423c-0.3 6.8-6.1 12.1-13 11.9z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2179"
					d="m1806.5 889.2c-317.6-9-635.3-9-952.9 0-6.9 0.2-12.7-5-12.9-11.8q-6.9-209.8-13.8-419.7c-0.2-6.7 5.2-12.3 12.1-12.5 327.4-9.3 654.8-9.3 982.1 0 6.9 0.2 12.4 5.8 12.1 12.5q-6.9 209.9-13.7 419.7c-0.3 6.7-6 12-13 11.8z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2179"
					d="m1802.8 887.5c-315.1-9-630.3-9-945.5 0-6.8 0.2-12.6-5.1-12.8-11.7q-6.8-208.2-13.7-416.5c-0.2-6.6 5.2-12.2 12.1-12.4 324.7-9.2 649.6-9.2 974.4 0 6.8 0.2 12.2 5.8 12 12.4q-6.8 208.3-13.7 416.5c-0.2 6.6-5.9 11.9-12.8 11.7z"
				/>
				<path
					id="&lt;Path&gt;"
					className="s2180"
					d="m1799.1 885.7c-312.6-8.9-625.4-8.9-938 0-6.8 0.2-12.5-5-12.8-11.6q-6.7-206.6-13.5-413.1c-0.2-6.6 5.1-12.2 11.9-12.4 322.2-9.1 644.5-9.1 966.8 0 6.8 0.2 12.1 5.7 11.9 12.4q-6.8 206.5-13.6 413.1c-0.2 6.6-5.9 11.8-12.7 11.6z"
				/>
			</g>
		</g>
	);
};