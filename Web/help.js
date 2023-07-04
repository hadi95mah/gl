//LMSOFT Web Creator Pro, Version:6.0.0.8
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('en');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(7.00,5.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=850;
menusystemmodel001Show("Menu2");
menusystemmodel002Show("Menu1");
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
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
