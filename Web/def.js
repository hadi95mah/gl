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
defpagewitdh=1024;
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMTabCtl("TabCtl1",1,1,0,null,0,null,null,null,null,0, 4, 1);
LMObjects[objindex++] = LMDiv("Label1",1,1,0,null,0,null,null,null,null,0);
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
function Page_OnMouseEnter()
{

   //LMSOFT Begin Event-Action
   if(is.ns) TabCtl1=FindTagFromId("TabCtl1");
   TabCtl1.Show();
   //LMSOFT End Event-Action

}