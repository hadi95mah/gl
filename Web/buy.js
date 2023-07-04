//LMSOFT Web Creator Pro, Version:6.0.0.8
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('en');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(4.00,4.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=850;
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img1=FindTagFromId('Img1');
Img1.PopUp=new Function("LMImageOpenPopUp('Img1',368,368);");
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img2=FindTagFromId('Img2');
Img2.PopUp=new Function("LMImageOpenPopUp('Img2',800,800);");
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img3=FindTagFromId('Img3');
Img3.PopUp=new Function("LMImageOpenPopUp('Img3',600,600);");
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img4=FindTagFromId('Img4');
Img4.PopUp=new Function("LMImageOpenPopUp('Img4',600,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But55at",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But66at",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But70at",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But74at",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
Img5.PopUp=new Function("LMImageOpenPopUp('Img5',600,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text5",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But60kat",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMImage("Img6",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img6=FindTagFromId('Img6');
Img6.PopUp=new Function("LMImageOpenPopUp('Img6',300,300);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text6",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But60bat",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img7=FindTagFromId('Img7');
Img7.PopUp=new Function("LMImageOpenPopUp('Img7',300,300);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text7",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img8",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img8=FindTagFromId('Img8');
Img8.PopUp=new Function("LMImageOpenPopUp('Img8',443,443);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text8",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But2",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMImage("Img9",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img9=FindTagFromId('Img9');
Img9.PopUp=new Function("LMImageOpenPopUp('Img9',600,600);");
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img10=FindTagFromId('Img10');
Img10.PopUp=new Function("LMImageOpenPopUp('Img10',1000,1000);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text9",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text10",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But4",1,1,0,null,0,null,null,null,null,null,0,0,0);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f1,0x3fe,0x6f);
LMObjectAnimate();

function PageTrapClick(e)
{
	if(is.ns && e.which!=1) return false;
	if(is.ie && event.button!=1) return false;
	if(is.ns && is.major<5) if(NSLMGlobalDn(e)==false) return false;
}
document.onmousedown=PageTrapClick;
document.oncontextmenu=new Function("return false;");
function Img10_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img10=FindTagFromId("Img10");
   Img10.PopUp();
   //LMSOFT End Event-Action

}


function Img8_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img8=FindTagFromId("Img8");
   Img8.PopUp();
   //LMSOFT End Event-Action

}


function Img1_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=FindTagFromId("Img1");
   Img1.PopUp();
   //LMSOFT End Event-Action

}



function Img2_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img2=FindTagFromId("Img2");
   Img2.PopUp();
   //LMSOFT End Event-Action

}
function Img3_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img3=FindTagFromId("Img3");
   Img3.PopUp();
   //LMSOFT End Event-Action

}
function Img4_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img4=FindTagFromId("Img4");
   Img4.PopUp();
   //LMSOFT End Event-Action

}
function Img5_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=FindTagFromId("Img5");
   Img5.PopUp();
   //LMSOFT End Event-Action

}
function Img6_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img6=FindTagFromId("Img6");
   Img6.PopUp();
   //LMSOFT End Event-Action

}
function Img7_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=FindTagFromId("Img7");
   Img7.PopUp();
   //LMSOFT End Event-Action

}

function Img7_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img7=FindTagFromId("Img7");
   Img7.PopUp();
   //LMSOFT End Event-Action

}
function Img9_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.PopUp();
   //LMSOFT End Event-Action

}

function Img9_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img9=FindTagFromId("Img9");
   Img9.PopUp();
   //LMSOFT End Event-Action

}