
let requestURL="https://data.kcg.gov.tw/dataset/6f29f6f4-2549-4473-aa90-bf60d10895dc/resource/30dfc2cf-17b5-4a40-8bb7-c511ea166bd3/download/lightrailtraffic.json";
let request=new XMLHttpRequest();
request.open('get',requestURL,false);
//request.responseType='json';
request.send(null);
var data=JSON.parse(request.responseText);

console.log(data);
let container=document.querySelector(".container");
for(let i=0;i<data.length;i++){
    let itm=document.createElement("div");
    itm.className='item';
    let pic=document.createElement('div');
    pic.className='pic';
    let txt=document.createElement('div');
    txt.className='txt';
    let h1=document.createElement('h1');
    h1.textContent="高雄輕軌"+data[i].年+'年度'+data[i].月+"月均運量統計";
    let img=document.createElement('img');
    img.src="https://picsum.photos/400/400?random="+(i+1).toString();
    pic.appendChild(img);


    let tbl=document.createElement("table");
    //暴力
    let tr0=document.createElement('tr');

    let td0=document.createElement('td');
    td0.textContent=data[i].年+ (data[i].年? '年':'無法顯示');
    tr0.appendChild(td0);
    let td1=document.createElement('td');
    td1.textContent=data[i].月+(data[i].月? '月':'無法顯示');
    tr0.appendChild(td1);
    let td2=document.createElement('td');
    td2.textContent='售票機日均：'+(data[i].售票機日均筆數? data[i].售票機日均筆數:'無法顯示');
    tr0.appendChild(td2);
    let td3=document.createElement('td');

    tbl.appendChild(tr0);

    let tr1=document.createElement('tr');

    let td4=document.createElement('td');
    td4.textContent='團體票日均：'+(data[i].團體票日均筆數? data[i].團體票日均筆數:'無法顯示');
    tr1.appendChild(td4);
    let td5=document.createElement('td');
    td5.textContent='車上刷卡日均：：'+(data[i].車上刷卡日均筆數? data[i].車上刷卡日均筆數 :'無法顯示');
    tr1.appendChild(td5);
    let td6=document.createElement('td');
    td6.textContent='月台上刷卡日均：'+(data[i].月台上刷卡日均筆數? data[i].月台上刷卡日均筆數:'無法顯示');
    tr1.appendChild(td6);

    
    tbl.appendChild(tr1);
    
    let tr2=document.createElement('tr');
    
    let td7=document.createElement('td');
    td7.textContent='總運量：'+(data[i].總運量? data[i].總運量:'無法顯示');
    tr2.appendChild(td7);
    let td8=document.createElement('td');
    td8.textContent='日均運量：'+(data[i].日均運量? data[i].日均運量:'無法顯示');
    tr2.appendChild(td8);
    let td9=document.createElement('td');
    td9.textContent='假日均運量：'+(data[i].假日均運量? data[i].假日均運量 :'無法顯示');
    tr2.appendChild(td9);

    tbl.appendChild(tr2);


    let tr3=document.createElement('tr');
   
    let tdA=document.createElement('td');
    tdA.textContent='補票日均：'+(data[i].補票日均筆數? data[i].補票日均筆數:'無法顯示');
    tr3.appendChild(tdA);

    tbl.appendChild(tr3);
    txt.appendChild(h1);
    txt.appendChild(tbl);
    itm.appendChild(pic);
    itm.appendChild(txt);
    let fixcom=document.createElement('div');
    itm.appendChild(fixcom);
    container.appendChild(itm);
    
    
    fixcom.className='fixcom';
    
}

