import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import { Progress } from "flowbite-react";

const IndividualAffiliate = () => {
    const [chartConfig] = useState({
        series: [{
            name: "Revenue",
            data: [0, 40, 300, 320, 500, 350, 200, 230, 500], // You can replace this with your data
        }],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            // colors: ["#FF5733"], // You can add multiple colors if you have more than one series
            stroke: {
              lineCap: "round",
              curve: "smooth",
              colors: ["#3B82F6"], // Line color
            },
            title: {
                text: 'Earnings',
                align: 'left',
                style: {
                    color: "#ffffff",
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 500,
                  },            
            },
            // subtitle: {
            //     text: 'Price Movements',
            //     align: 'left',
            //     labels: {
            //         style: {
            //             colors: "#ffffff", // Y-axis label color
            //           },
            //         },
            // },
            labels: ["2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01", "2024-07-01", "2024-08-01", "2024-09-01"],
            xaxis: {
                type: 'datetime',
                labels: {
                    style: {
                        colors: "#ffffff", // Y-axis label color
                      },
                    },
            },
            yaxis: {
                opposite: true,
                labels: {
                style: {
                    colors: "#ffffff", // Y-axis label color
                  },
                },
            },
            legend: {
                horizontalAlign: 'left'
            },
            grid: {
                show: true,
                borderColor: "rgba(221, 221, 221, 0.5)",
                strokeDashArray: 5,
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
                padding: {
                  top: 5,
                  right: 20,
                },
              },
              fill: {
                opacity: 0.8,
              },
              tooltip: {
                theme: "dark",
              },
        },
    });

    const progressPercentage=72;

    return (
        <div className="h-full xl:h-screen  w-full pb-20 flex flex-col justify-start mt-16 pt-4 lg:ml-[320px]" style={{ backgroundColor: '#282E38'}}>
            <div className="px-14 pt-8">
                <p className="text-xl font-semibold lg:text-3xl text-gray-200">Analytics for Guvi AI-ML Course</p>
            </div>

            <div className="h-fit flex flex-col xl:flex-row justify-between items-center py-3 xl:px-12">
                <div className="h-fit rounded-md border-gray-800 border py-6 px-8  w-[80%] xl:w-[33%]" style={{ backgroundColor: '#303743', boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px' }}>
                    <div className="flex justify-between align-middle">
                        <div className="flex justify-center items-center">
                            <p className="text-white font-semibold text-xl underline">Total clicks</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle my-6">
                        <p className="text-center text-2xl font-light text-white">200K</p>
                    </div>
                </div>
                <div className="h-fit rounded-md border-gray-800 border py-6 px-8 my-2 w-[80%] xl:w-[33%]" style={{ backgroundColor: '#303743', boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px' }}>
                    <div className="flex justify-between align-middle">
                        <div className="flex justify-center items-center">
                            <p className="text-white font-semibold text-xl underline">Conversions</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle my-6">
                        <p className="text-center text-2xl font-light text-white">200K</p>
                    </div>
                </div>
                <div className="h-fit rounded-md border-gray-800 border py-6 px-8  w-[80%] xl:w-[33%]" style={{ backgroundColor: '#303743', boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px' }}>
                    <div className="flex justify-between align-middle">
                        <div className="flex justify-center items-center">
                            <p className="text-white font-semibold text-xl underline">Earnings</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center align-middle my-6">
                        <p className="text-center text-2xl font-light text-white">200K</p>
                    </div>
                </div>
            </div>

            <div className="h-fit flex flex-col xl:flex-row justify-between items-start px-2 mt-4 xl:mt-0 sm:px-12">
                <div className="h-fit rounded-md border-gray-800 border py-6 px-8 w-full xl:w-2/3" style={{ backgroundColor: '#303743', boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px' }}>
                    <div id="chart">
                        <ReactApexChart options={chartConfig.options} series={chartConfig.series} type="area" height={350}/>
                    </div>
                    <div id="html-dist"></div>
                </div>

                <div className="h-full w-full rounded-md flex flex-col justify-center items-center border-gray-800 border py-6 mt-2 xl:mt-0 xl:w-1/3 xl:px-4" style={{ backgroundColor: '#303743', boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px' }}>
                    <p className="font-normal text-md text-gray-200">Total Earnings</p>
                    <p className="font-normal text-3xl mt-3 text-gray-200">$50000</p>
                    
                    <div className="flex-col items-start w-full">
                    <p className=" text-left text-white mt-6 ml-4">Completed</p>
                    <div className="flex w-full items-center justify-center">
                     <div className='h-1 w-5/6 rounded-lg' style={{ backgroundColor: '#43484a'}}>
                       <div style={{ width: `${progressPercentage}%`}} className="h-full bg-blue-600 " ></div>
                     </div>
                     <div className="ml-3">
                     <p className="text-gray-300">$720</p>
                     </div>
                    </div>
                    </div>

                    <div className="flex-col items-start w-full">
                    <p className=" text-left text-white mt-6 ml-4">Ongoing</p>
                    <div className="flex w-full items-center justify-center">
                     <div className='h-1 w-5/6 rounded-lg' style={{ backgroundColor: '#43484a'}}>
                       <div style={{ width: `${progressPercentage}%`}} className="h-full bg-blue-600 " ></div>
                     </div>
                     <div className="ml-3">
                     <p className="text-gray-300">$720</p>
                     </div>
                    </div>
                    </div>


                    <div className="flex-col items-start w-full">
                    <p className=" text-left text-white mt-6 ml-4">Refunded</p>
                    <div className="flex w-full items-center justify-center">
                     <div className='h-1 w-5/6 rounded-lg' style={{ backgroundColor: '#43484a'}}>
                       <div style={{ width: `${progressPercentage}%`}} className="h-full bg-blue-600 " ></div>
                     </div>
                     <div className="ml-3">
                     <p className="text-gray-300">$720</p>
                     </div>
                    </div>
                    </div>



                    <div className="flex-col items-start w-full">
                    <p className=" text-left text-white mt-6 ml-4">Cancelled</p>
                    <div className="flex w-full items-center justify-center">
                     <div className='h-1 w-5/6 rounded-lg' style={{ backgroundColor: '#43484a'}}>
                       <div style={{ width: `${progressPercentage}%`}} className="h-full bg-blue-600 " ></div>
                     </div>
                     <div className="ml-3">
                        <p className="text-gray-300">$720</p>
                     </div>
                    </div>
                    </div>

                    
                </div>
            </div>

            <div className="py-6 flex justify-center mt-6">
            <p className="text-white font-light  text-center"><i class="text-sm xl:text-2xl">"Affiliate marketing is not about selling products, it's about building relationships."</i></p>
            </div>


        </div>
    );
}

export default IndividualAffiliate;
