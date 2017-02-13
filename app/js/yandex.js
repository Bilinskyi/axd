
//      ymaps.ready(init);
//         var myMap, 
//             myPlacemark;

//         function init(){ 
//             myMap = new ymaps.Map ("map-canvas", {
//                 center: [55.660049, 37.619585],
//                 zoom: 10
//             }); 
            
   

// var myPlacemark = new ymaps.Placemark([55.660049, 37.619585], {
// 	hintContent: 'TEXT'
// }, 
// {
//         preset: 'twirl#redDotIcon' 
//     });


// 			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
// 			myMap.geoObjects.add(myPlacemark);
//         }




ymaps.ready(init);
function init(){
    var myMap=new ymaps.Map("map-canvas",{
        center:[56.844412, 60.617085],
        zoom:15,
        controls:['zoomControl']
    }),
    Placemark1=new ymaps.Placemark([56.844412, 60.617085],{
        balloonContent:'Балун 1',
        hintContent:'Стандартный значок метки 1',
    },{
        preset:'islands#redDotIcon'
    })
    // Placemark2=new ymaps.Placemark([59.935935,30.363452],{
    //     balloonContent:'Балун 2',
    //     hintContent:'Стандартный значок метки 2',
    // },{
    //     preset:'islands#redDotIcon'
    // });
    // myMap.geoObjects.add(Placemark1).add(Placemark2);
    myMap.geoObjects.add(Placemark1);
    myMap.behaviors.disable('scrollZoom');
}