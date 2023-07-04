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
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img1=FindTagFromId('Img1');
Img1.PopUp=new Function("LMImageOpenPopUp('Img1',600,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text2",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,1);
if(is.ns) Img5=FindTagFromId('Img5');
Img5.PopUp=new Function("LMImageOpenPopUp('Img5',600,600);");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text5",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text3",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text4",1,1,0,null,0,null,branchlist,null,null);
branchlist = new Array();
LMObjects[objindex++] = LMText("Text6",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But1",1,1,0,null,0,null,new LMBranchEx("0","./help.html",null,0.0,null,null,1,1,1,1,1,1,0,640,480,"_self"),null,null,null,0,0,1);
LMObjects[objindex++] = LMButton("But55at",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMButton("But60kat",1,1,0,null,0,null,null,null,null,null,0,0,0);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f1,0x3fe,0x6f);
LMObjectAnimate();


function Img1_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img1=FindTagFromId("Img1");
   Img1.PopUp();
   //LMSOFT End Event-Action

}

function Img5_OnClick()
{

   //LMSOFT Begin Event-Action
   if(is.ns) Img5=FindTagFromId("Img5");
   Img5.PopUp();
   //LMSOFT End Event-Action

}