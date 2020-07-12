(this["webpackJsonpmeteo-app"]=this["webpackJsonpmeteo-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(53)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(25),a(3)),l=a(4),s=a(7),u=a(6),m=a(5);a(26),a(27);var h=function(e){return r.a.createElement("div",{className:"component-search-input"},r.a.createElement("input",{onKeyDown:e.keydown,placeholder:"Enter a city..."}),r.a.createElement("button",{className:"",name:"button",onClick:e.handleClick},"\u2713"))};var d=function(e){return r.a.createElement("div",{className:"mt-5"},r.a.createElement("h3",null,e.todaySummary.name,"\xa0",e.todaySummary.country?"("+e.todaySummary.country+")":""),r.a.createElement("h1",null,e.todaySummary.currentTemp?e.todaySummary.currentTemp+"\xb0":""),r.a.createElement("h4",null,e.todaySummary.weatherDesc),r.a.createElement("img",{className:"",src:e.todaySummary.weatherIcon?e.todaySummary.weatherIcon:"",alt:""}))};a(28),a(29);var p=function(e){return r.a.createElement("div",{className:"smallthumbnail"},r.a.createElement("h5",null,e.todayForecast.hour),r.a.createElement("img",{src:e.todayForecast.weatherIcon?e.todayForecast.weatherIcon:"",alt:"Weather Icon"}),r.a.createElement("h4",null,e.todayForecast.currentTemp?e.todayForecast.currentTemp+"\xb0":""))},y=a(19),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.todayForecast,t=[];return e.length&&(t=e.map((function(e,t){return r.a.createElement("div",{key:t,className:"wrapper-thumbnail mt-2 mb-5 ml-2 mr-2 col-xs-12 text-center"},r.a.createElement(p,{todayForecast:e}))}))),r.a.createElement("div",{className:"container"},r.a.createElement(y.a,{className:"scroll-container"},r.a.createElement("div",{className:"row flex-nowrap wrapper-smallthumbnail"},t)))}}]),a}(r.a.Component),v=(a(32),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleKeyDown=n.handleKeyDown.bind(Object(s.a)(n)),n.handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"handleKeyDown",value:function(e){"Enter"===e.key&&this.props.handleInputVal(e.target.value)}},{key:"handleClick",value:function(e){var t=e.target.previousSibling.value;t&&this.props.handleInputVal(t)}},{key:"render",value:function(){var e=this.props.todaySummary,t=this.props.hourlyForecast;return r.a.createElement("div",{className:"component-sidebar d-flex flex-column justify-content-center ".concat(this.props.isDataLoaded?"fullheight":"")},r.a.createElement("h1",{className:"mb-5"},"Today's weather"),r.a.createElement(h,{isAPIError:this.props.isAPIError,keydown:this.handleKeyDown,handleClick:this.handleClick}),this.props.isDataLoaded&&r.a.createElement("div",null,r.a.createElement(d,{todaySummary:e}),r.a.createElement(f,{todayForecast:t})))}}]),a}(r.a.Component));a(33),a(34);var E=function(e){return r.a.createElement("div",{className:"thumbnail d-flex flex-column justify-content-around"},r.a.createElement("div",null,r.a.createElement("h4",null,e.forecastData.currentTemp?e.forecastData.currentTemp+"\xb0":""),r.a.createElement("p",null,e.forecastData.weatherDesc)),r.a.createElement("div",null,r.a.createElement("img",{src:e.forecastData.weatherIcon?e.forecastData.weatherIcon:"",alt:"Weather Icon"}),r.a.createElement("h4",null,e.forecastData.dayName)))},w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.forecastData,t=[];return e.length&&(t=e.map((function(e,t){return r.a.createElement("div",{key:t,className:"wrapper-thumbnail mt-2 mb-2 col-xs-12 col-md-6 col-lg-3 col-xl-2 text-center"},r.a.createElement(E,{forecastData:e}))}))),r.a.createElement("div",{className:"component-forecast"},r.a.createElement("h1",{className:"text-center"},"Forecast"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t)))}}]),a}(r.a.Component),b=a(8),g=a.n(b),D=function(){function e(){var t=this;Object(i.a)(this,e),this.fetchApiData=function(e,a,n){var r,c;c=a?"".concat(t.baseURL,"/weather?appid=").concat(t.apiKey,"&lat=").concat(a.latitude,"&lon=").concat(a.longitude,"&units=metric"):"".concat(t.baseURL,"/weather?appid=").concat(t.apiKey,"&q=").concat(e||t.defaultCity,"&units=metric"),g.a.get(c).then((function(e){return console.log(e),r=t.sanitizeDataWeather(e),g.a.get("".concat(t.baseURL,"/onecall?appid=").concat(t.apiKey,"&lat=").concat(e.data.coord.lat,"&lon=").concat(e.data.coord.lon,"&exclude=current&units=metric"))})).then((function(e){console.log(e),n({todaySummary:r,hourlyForecast:t.sanitizeForecast(e.data.hourly,!0),dailyForecast:t.sanitizeForecast(e.data.daily,!1)})})).catch((function(e){n({error:e.response})}))},this.capitalize=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},this.apiKey="109ff3545de4ef5f87dacbb3775a0e1f",this.baseURL="https://api.openweathermap.org/data/2.5",this.iconBaseURL="https://openweathermap.org/img/wn/",this.defaultCity="Nice",this.weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}return Object(l.a)(e,[{key:"hourToDisplay",value:function(e){var t="";return t+=e.getHours()<10?"0"+e.getHours():e.getHours(),t+=":",t+=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}},{key:"sanitizeDataWeather",value:function(e){return{name:e.data.name,currentTemp:Math.floor(1*e.data.main.temp)/1,weatherDesc:this.capitalize(e.data.weather[0].description),weatherIcon:this.iconBaseURL+e.data.weather[0].icon+"@4x.png",country:e.data.sys.country}}},{key:"sanitizeForecast",value:function(e,t){var a=this,n=[];return e.forEach((function(e){var t=new Date(1e3*e.dt),r=e.temp.day?e.temp.day:e.temp;n.push({currentTemp:Math.floor(1*r)/1,weatherDesc:a.capitalize(e.weather[0].description),weatherIcon:a.iconBaseURL+e.weather[0].icon+"@2x.png",dayName:a.weekday[t.getDay()],hour:a.hourToDisplay(a.convertUTCDateToLocalDate(t))})})),t?n.slice(0,24):n.slice(1,7)}},{key:"convertUTCDateToLocalDate",value:function(e){var t=new Date(e.getTime()+60*e.getTimezoneOffset()*1e3),a=e.getTimezoneOffset()/60,n=e.getHours();return t.setHours(n-a),t}}]),e}(),k=(a(52),new D),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).isDataLoaded=!1,e.fetchApiData=e.fetchApiData.bind(Object(s.a)(e)),e.state={todaySummary:null,hourlyForecast:null,dailyForecast:null,isAPIError:!1},e}return Object(l.a)(a,[{key:"fetchApiData",value:function(e,t){var a=this;k.fetchApiData(e,t,(function(e){e.error?a.setState({isAPIError:!0}):(a.isDataLoaded=!0,a.isAPIError=!1,a.setState({todaySummary:e.todaySummary,hourlyForecast:e.hourlyForecast,dailyForecast:e.dailyForecast}))}))}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.fetchApiData(null,t.coords)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:"App-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row h-100"},r.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-4 mt-3 mb-3 text-center"},r.a.createElement(v,{todaySummary:!!this.state.todaySummary&&this.state.todaySummary,hourlyForecast:!!this.state.hourlyForecast&&this.state.hourlyForecast,handleInputVal:this.fetchApiData,isDataLoaded:this.isDataLoaded,isAPIError:this.state.isAPIError})),this.isDataLoaded&&r.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-8 mt-3 mb-3 align-self-end"},r.a.createElement(w,{city:this.state.city,forecastData:!!this.state.dailyForecast&&this.state.dailyForecast}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.bfe0daec.chunk.js.map