import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function TodayHighlight(props) {

    const { humidity, visibility, wind, airPressure } = props;
    const windSpeed = Math.round(wind.speed);

    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="bg-secondary col-span-1 flex flex-col items-center justify-between p-5">
                <p className="text-sm">Wind status</p>
                <h1 className="font-bold text-3xl">{windSpeed}<span className="font-medium text-xl">mph</span></h1>
                <div className="flex">
                    <span className="w-6 h-6 grid place-items-center rounded-full bg-gray-500 mr-2"><ArrowRightIcon className="rounded-full"/></span>
                    {wind.direction}
                </div>
            </div>

            <div className="bg-secondary col-span-1 flex flex-col items-center justify-between p-5">
                <p className="text-sm">Humidity</p>
                <h1 className="font-bold text-3xl">{humidity}<span className="font-normal text-xl">%</span></h1>
                <div className="w-52 text-xxsm ">
                    <div className="w-full flex justify-between my-0.5">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                    </div>
                    <div className="w-full  h-2 bg-gray-400 rounded-md">
                        <div className="bg-bar h-full rounded-md" style={{width:`${humidity}%`}}></div>
                    </div>
                    <span className="float-right my-0.5">%</span>
                </div>
            </div>


            <div className="bg-secondary col-span-1 flex flex-col items-center justify-between p-5">
                <p className="text-sm">Visibilty</p>
                <h1 className="font-bold text-3xl">{visibility.toFixed(1)} <span className="font-medium text-xl">miles</span></h1>               
            </div>

            <div className="bg-secondary col-span-1 flex flex-col items-center justify-between p-5">
                <p className="text-sm">Air Pressure</p>
                <h1 className="font-bold text-3xl">{Math.round(airPressure)} <span className="font-medium text-xl">mb</span></h1>               
            </div>
        </div>
    )
}

export default TodayHighlight
