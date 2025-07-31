import react from "react";
import Feature from "../../component/features/Feature";
import Chart from "../../component/chart/chart";
import WidgetSm from "../../component/widgetSm/widgetSm";
import { xAxisData } from "../../datas";
import WidgetLg from "../../component/WidgetLg/WidgetLg";
import './home.css'

export default function Home (){

 return(
<div className="home">

<Feature/>
{/* <Chart grid data={xAxisData} datakey='Sale' title="User Analytics"/> */}

<div className="bottom-div">
<WidgetSm/>
 <WidgetLg/>  
</div>
</div>
 );
}

{/* <>
<div className="home">
<Feature/>
<Chart grid data={xAxisData} datakey='Sale' title="User Analytics"/>
</div>

<div className="bottom-div">
<WidgetSm/>
<WidgetLg/>
</div>
</> */}
