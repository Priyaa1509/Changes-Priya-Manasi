import React from "react";
import './Whats.css'

function Whats () {
    return(
    <fieldset class="checkbox-group">
        <div className="secHeading">
            <p>What's in it for you?</p>
        </div>
        <div class="checkbox">
            <label class="checkbox-wrapper">
                <span class="checkbox-tile">
                    <span class="checkbox-icon">
                        <svg  class="svg" width="192px" height="192px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                            stroke-width="3" stroke="#7EF2B0" fill="none">
                            <rect x="7.18" y="16.7" width="50.86" height="29.87" />
                            <path d="M17.22,16.55a10,10,0,0,1-10,10.05" />
                            <path d="M17.51,46.57a10.05,10.05,0,0,0-10-10" />
                            <path d="M48.16,16.55A10.05,10.05,0,0,0,58.21,26.6" />
                            <path d="M48,46.57a10.05,10.05,0,0,1,10-10" />
                            <path
                                d="M28.47,22.3H31c2.49,0,5.23.81,5.23,4.6,0,4.11-3.48,5.68-7.18,5.26a.21.21,0,0,0-.17.36L36.74,41"
                                stroke-linecap="round" />
                            <line x1="39.24" y1="22.3" x2="30.45" y2="22.3" stroke-linecap="round" />
                            <line x1="28.59" y1="27.03" x2="39.3" y2="27.03" stroke-linecap="round" />
                        </svg>

                    </span>
                    <span class="checkbox-label">Incubation Opportunity</span>
                </span>
            </label>

            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <svg  stroke="#7EF2B0" stroke-width="3" width="200px" height="192px" viewBox="-20 0 190 190" fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M129.49 114.51C129.121 116.961 128.187 119.293 126.762 121.322C125.337 123.351 123.461 125.021 121.28 126.2C120.676 126.535 120.043 126.816 119.39 127.04C120.22 138.04 102.74 142.04 93.32 139.42L96.82 151.66L87.82 151.98L72.07 129.43C66.76 130.93 60.49 131.65 56.44 125.15C56.0721 124.553 55.7382 123.935 55.44 123.3C54.4098 123.51 53.3614 123.617 52.31 123.62C49.31 123.62 44.31 122.72 41.77 120.96C39.7563 119.625 38.1588 117.75 37.16 115.55C31.75 116.29 27.16 115.02 24.16 111.88C20.36 107.97 19.28 101.51 21.26 94.58C23.87 85.33 31.81 74.91 47.59 71C48.9589 69.2982 50.5972 67.8322 52.44 66.66C62.35 60.31 78.44 59.76 90.65 65.79C95.3836 64.9082 100.27 65.376 104.75 67.14C113.53 70.43 119.91 77.31 121.11 84.3C123.487 85.5317 125.433 87.4568 126.69 89.82C129.32 94.76 129.69 99.71 127.92 103.71C129.587 107.049 130.138 110.835 129.49 114.51ZM123.01 109.31C121.612 110.048 120.056 110.434 118.475 110.434C116.894 110.434 115.338 110.048 113.94 109.31L114.67 104.46C117.75 104.76 120.26 103.8 121.57 101.83C123.04 99.64 122.81 96.39 120.95 92.9C118.87 88.99 114.38 88.37 111.89 88.34H111.73C105.49 88.34 99.13 91.89 96.56 96.52L92.82 94.73C93.5553 92.3449 94.8046 90.15 96.48 88.3C95.0376 87.0754 93.9474 85.4887 93.3217 83.703C92.696 81.9173 92.5574 79.9971 92.92 78.14L96.61 77.8C96.7789 79.302 97.4 80.7172 98.3911 81.8583C99.3822 82.9994 100.697 83.8125 102.16 84.19C105.238 82.8161 108.58 82.1335 111.95 82.19C112.43 82.19 112.89 82.24 113.36 82.27C110.969 78.0312 107.18 74.7545 102.64 73C91.56 68.7 84.09 75.37 82.38 77.67C78.26 83.19 80.9 88.41 82.91 91.8L79.61 94.8C76.736 92.314 74.8075 88.9127 74.15 85.17C69.92 86.44 64.24 86.17 61.06 80.74L64.06 78.68C67.43 81.2 72.78 80.98 75.32 77.87C75.9252 76.4949 76.6905 75.1959 77.6 74C79.044 72.093 80.7864 70.4316 82.76 69.08C74.47 66.82 62.76 67.19 55.68 71.73C53.7668 72.841 52.192 74.4517 51.1244 76.3895C50.0569 78.3274 49.5368 80.5192 49.62 82.73C49.62 86.3 52.42 91.94 56.19 92.82L54 97.07C51.5946 96.5129 49.4109 95.2487 47.73 93.44L44.48 97.58L41.23 96L44.41 87.68C43.8904 86.064 43.624 84.3774 43.62 82.68C43.628 81.3361 43.7687 79.9963 44.04 78.68C34.04 82.81 29.1 89.68 27.29 95.96C25.9 100.79 26.44 105.15 28.72 107.49C30.53 109.35 33.3 109.79 35.91 109.62L42.91 104.17L45.21 106.11L43.13 112.93C44.22 116.4 47.79 118.19 54.3 116.93C54.6375 114.169 55.7272 111.554 57.45 109.37C58.7133 107.552 60.3846 106.056 62.33 105L65.75 95.79L69.17 95.64L68.8 103.19C74.55 102.6 80.98 103.77 86.97 102.87L88.07 106.87C79.29 110.93 70.3 104.31 62.15 113.04C59.22 116.18 60.34 118.91 62.15 121.66C64.76 125.59 69.66 123.23 74.67 121.66C82.26 119.34 87.77 117.66 98.16 118.51C95.68 113.8 95.92 108.11 99.24 101.85L104.13 103.78C100.7 111.69 103.91 116.27 106.13 118.29C109.56 121.41 114.72 122.35 118.13 120.47C119.436 119.749 120.559 118.737 121.412 117.513C122.265 116.289 122.825 114.885 123.05 113.41C123.275 112.051 123.258 110.663 123 109.31H123.01Z"
                                    fill="none" />
                            </svg> </span>
                        <span class="checkbox-label">Mentoring session</span>
                    </span>
                </label>
            </div>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <svg fill="#7EF2B0" stroke-width="0.1" stroke="#7EF2B0" width="192px" height="192px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23 1v18h-3v-1h2V2H2v16h8v1H1V1zm-7 2H8v1h8zm-2 3V5h-4v1zm-7 5H3v1h4zm0 2H3v1h4zm-4 3h2v-1H3zm14-3a2 2 0 1 1-2-2 2.002 2.002 0 0 1 2 2zm-1 0a1 1 0 1 0-1 1 1.001 1.001 0 0 0 1-1zm.002-4.293a.965.965 0 0 0 1.32.55 1.08 1.08 0 0 1 1.213.207 1.066 1.066 0 0 1 .21 1.21.966.966 0 0 0 .548 1.324 1.064 1.064 0 0 1 0 2.004.965.965 0 0 0-.549 1.323A1.05 1.05 0 0 1 18 16.816v7.046l-3-2.538-3 2.538v-7.046a1.05 1.05 0 0 1-.744-1.49.965.965 0 0 0-.549-1.324 1.064 1.064 0 0 1 0-2.004.966.966 0 0 0 .549-1.324 1.066 1.066 0 0 1 .209-1.21 1.08 1.08 0 0 1 1.212-.206.965.965 0 0 0 1.32-.551 1.064 1.064 0 0 1 2.005 0zm.998 13v-5.04a.93.93 0 0 0-.998.625 1.064 1.064 0 0 1-2.004 0 .93.93 0 0 0-.998-.625v5.039l2-1.692zm-1.94-4.749a1.967 1.967 0 0 1 1.853-1.308 2.12 2.12 0 0 1 .87.197l.058-.091a1.964 1.964 0 0 1 1.116-2.695v-.122a1.966 1.966 0 0 1-1.116-2.695l-.087-.084a1.965 1.965 0 0 1-2.694-1.117h-.12a1.965 1.965 0 0 1-2.694 1.117l-.087.084a1.966 1.966 0 0 1-1.116 2.695v.122a1.964 1.964 0 0 1 1.116 2.695l.058.09a2.12 2.12 0 0 1 .87-.196 1.967 1.967 0 0 1 1.853 1.308L15 17z" />
                                <path fill="none" d="M0 0h24v24H0z" />
                            </svg>
                        </span>
                        <span class="checkbox-label">Certificates</span>
                    </span>
                </label>
            </div>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <svg fill="#7EF2B0" width="192px" height="192px" viewBox="0 0 1000 1000" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" 
                                enable-background="new 0 0 1000 1000">

                                <g>

                                    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">

                                        <path
                                            d="M3738.9,4855.2c-27-17.3-200.2-179.1-385.1-358.1l-336.9-323.5l-510.2-258c-310-157.9-548.7-290.7-608.4-340.8c-209.9-175.2-369.7-402.4-546.8-772.1C800.8,1649.5,421.5-410.6,225.1-3321.7c-30.8-485.2-27-516,102-548.7c259.9-69.3,1426.7-310,1459.4-302.3c67.4,17.3,94.3,82.8,159.8,367.7c34.7,148.3,63.5,269.6,65.5,271.5c44.3,30.8,109.8,46.2,200.2,46.2c140.5,0,252.2-50,489-221.4c387-277.3,1062.8-552.6,1682.8-683.5c273.4-57.8,772.1-73.2,1068.6-30.8c658.5,92.4,1315,352.3,1836.8,725.8c104,75.1,234.9,154,292.6,173.3c104,36.6,310,48.1,381.2,19.3c25-9.6,69.3-104,144.4-310c138.6-373.5,150.2-385.1,360-348.5c80.9,13.5,390.9,84.7,689.3,157.9c496.7,123.2,544.9,138.6,594.9,190.6c61.6,69.3,61.6,46.2,23.1,673.9c-105.9,1702-336.9,3361.6-629.6,4514.9c-267.6,1058.9-583.4,1755.9-962.7,2131.4c-123.2,121.3-169.4,148.3-666.2,398.5l-533.3,269.6l-325.4,346.6c-188.7,200.2-344.6,350.4-373.5,358.1c-55.8,13.5-132.9-32.7-156-92.4c-9.6-23.1-40.4-140.6-69.3-261.9c-196.4-822.1-664.3-1309.2-1159.1-1207.2c-425.5,86.6-768.2,610.3-956.9,1459.4c-7.7,32.7-34.7,65.5-69.3,82.8C3804.4,4895.7,3796.7,4895.7,3738.9,4855.2z M3744.7,4192.9c80.9-242.6,175.2-442.8,281.1-606.5c107.8-161.7,333.1-371.6,473.6-439c63.5-30.8,119.4-57.8,123.2-61.6c7.7-7.7-358.1-464-387-481.3c-9.6-5.8-63.5,19.3-117.4,55.8c-338.9,225.3-681.6,702.8-831.8,1157.1l-52,152.1l217.6,217.6c119.4,119.4,219.5,215.6,221.4,213.7C3675.4,4398.9,3708.1,4304.6,3744.7,4192.9z M6715.5,3821.3c-111.7-333.1-338.9-702.7-579.5-947.3c-132.9-136.7-315.8-277.2-358.1-277.2c-15.4,0-410.1,481.3-400.5,489c3.8,1.9,63.5,30.8,132.9,65.5c329.2,157.9,600.7,542.9,764.4,1078.2l53.9,177.1l217.6-217.6l219.5-219.5L6715.5,3821.3z M7329.7,3675c261.8-125.1,319.6-159.8,311.9-188.7c-3.9-17.3-32.7-109.8-59.7-206c-115.5-390.8-136.7-569.9-136.7-1145.6c1.9-402.4,9.6-585.3,34.6-760.5c57.8-394.7,129-700.8,229.1-1001.2l96.3-288.8l-11.6-1251.5c-5.8-687.4-11.5-1413.2-11.5-1611.5v-360l-157.9-59.7c-202.2-77-342.7-157.9-573.8-327.3c-219.5-163.7-679.6-396.6-964.6-489c-256.1-84.7-554.5-146.3-772.1-159.8l-169.4-11.5v3531.1l1.9,3531.1l82.8-94.3c46.2-50.1,157.9-182.9,246.4-292.7c86.6-109.7,177.1-204.1,198.3-209.9c96.3-28.9,377.4,134.8,606.5,348.5c313.8,296.5,558.4,687.3,685.4,1091.7c19.2,59.7,36.6,109.7,38.5,109.7C7006.2,3829,7152.6,3759.7,7329.7,3675z M3020.8,3613.4c115.5-342.7,300.3-652.7,539.1-903c256.1-267.6,625.7-516,727.8-491c27,7.7,144.4,130.9,284.9,298.4l240.7,288.8l11.6-1255.3c5.8-691.2,15.4-2271.9,19.3-3511.8l9.6-2258.4h-90.5c-138.6,0-477.5,50-652.7,94.3c-492.9,127.1-989.6,377.4-1324.6,671.9c-159.8,138.6-296.5,209.9-458.2,240.7c-65.5,11.6-121.3,23.1-125.2,25c-3.9,1.9-13.5,727.8-23.1,1611.5L2162.1,34.2l48.1,121.3c286.9,727.8,406.3,1858,277.3,2624.2c-34.7,215.6-107.8,516-150.2,625.7c-19.3,46.2-13.5,52,300.3,204.1c177.1,86.6,325.4,154,329.2,150.2C2970.7,3755.9,2993.8,3690.4,3020.8,3613.4z M2171.7,3022.3c188.7-739.3,104-1854.1-206-2724.4l-75.1-209.8v-1503.7l-1.9-1503.7l-119.4-462.1c-117.4-442.8-123.2-462.1-165.6-456.3c-109.7,17.3-1084,231-1093.6,242.6c-27,26.9,94.4,1513.3,188.7,2293.1c283,2381.6,735.5,3983.5,1282.3,4547.7l90.5,92.4l27-67.4C2113.9,3234.1,2146.6,3122.4,2171.7,3022.3z M8082.5,3189.8C8612,2602.6,9024,1156.6,9312.8-1144.1c96.3-758.6,244.5-2464.4,217.6-2485.6c-1.9-3.8-227.2-63.5-496.7-134.8c-269.6-71.2-504.4-132.8-521.8-138.6c-25-5.8-69.3,88.6-217.6,471.7l-184.8,479.4l15.4,1507.5L8140.3,65l-75.1,211.8c-325.4,928-396.6,2152.5-165.6,2857.2C7963.1,3328.4,7957.3,3326.5,8082.5,3189.8z" />

                                        <path
                                            d="M5677.7,1229.8c-40.4-32.7-52-57.8-52-115.5s11.5-82.8,52-115.5c50-38.5,65.4-40.4,710.4-34.7c745.1,5.8,729.7,3.8,729.7,150.2s15.4,144.4-729.7,150.2C5743.2,1270.2,5727.8,1268.3,5677.7,1229.8z" />

                                        <path
                                            d="M138.5-4126.5c-21.2-34.6-38.5-82.8-38.5-105.9c0-55.8,67.4-117.4,154-140.5c36.6-9.6,329.2-82.8,650.8-163.7c517.9-129,589.2-142.5,635.4-121.3c94.4,46.2,123.2,154,63.5,242.6c-17.3,28.9-1266.9,348.5-1365.1,350.4C188.6-4064.9,169.3-4076.4,138.5-4126.5z" />

                                        <path
                                            d="M9120.3-4209.3c-747-190.6-698.9-173.3-735.5-250.3c-26.9-57.8-28.9-73.2-5.8-117.4c15.4-27,52-61.6,80.9-77c48.1-25,98.2-15.4,673.9,127.1c342.7,84.7,646.9,165.6,675.8,177.1c92.4,36.6,119.4,140.5,55.8,223.3C9803.8-4045.6,9722.9-4055.3,9120.3-4209.3z" />

                                    </g>

                                </g>
                            </svg>
                        </span>
                        <span class="checkbox-label">Goodies and Swags</span>
                    </span>
                </label>
            </div>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <svg fill="#7EF2B0" stroke-version="0.1" version="1.1" id="XMLID_66_" width="192px" height="192px"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24">
                                <g id="workshop">
                                    <g>
                                        <polygon points="24,17 20,17 20,15 22,15 22,3 4,3 4,5 2,5 2,1 24,1 		" />
                                    </g>
                                    <g>
                                        <rect x="10" width="6" height="4" />
                                    </g>
                                    <g>
                                        <path d="M13,24H0v-5c0-2.3,1.3-4.4,3.3-5.4C2.5,12.8,2,11.7,2,10.5C2,8,4,6,6.5,6S11,8,11,10.5c0,0.7-0.1,1.3-0.4,1.8
                               c1.4-0.6,3.4-1.8,5.7-4.1l2-2l1.4,1.4L18.4,9l1.8,1.8l-0.3,0.6c-0.1,0.2-2.4,5.5-6.6,7.2C13.1,18.7,13,18.8,13,19V24z M2,22h9v-3
                               c0-1,0.6-1.9,1.5-2.3c2.7-1.1,4.6-4.2,5.3-5.5L17,10.4C12.1,15,8.4,15,8,15H6c-2.2,0-4,1.8-4,4V22z M6.5,13C7.9,13,9,11.9,9,10.5
                               S7.9,8,6.5,8S4,9.1,4,10.5S5.1,13,6.5,13z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span class="checkbox-label">Curated workshops</span>
                    </span>
                </label>
            </div>
        </div>
    </fieldset>
    );
}

export default Whats
