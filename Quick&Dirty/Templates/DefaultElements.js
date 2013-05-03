function elementBuild(elementObject){
	if(typeof(elementObject.attr) === 'object'){
		var element = {
			type: "<"+elementObject.type+"/>",
			attr: elementObject.attr,
			data: elementObject.data
		}
		if(elementObject.target != undefined){
			build(element, elementObject.target);
		}else{
			return element;
		}
	}
}
function title(attr, data, target){
	var e = elementBuild({type: "title",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function div(attr, data, target){
	var e = elementBuild({type: "div",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function h1(attr, data, target){
	var e = elementBuild({type: "h1",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function h2(attr, data, target){
	var e = elementBuild({type: "h2",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function h3(attr, data, target){
	var e = elementBuild({type: "h3",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function h4(attr, data, target){
	var e = elementBuild({type: "h3",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function h5(attr, data, target){
	var e = elementBuild({type: "h5",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function p(attr, data, target){
	var e = elementBuild({type: "p",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function u(attr, data, target){
	var e = elementBuild({type: "u",attr: attr,data: data,target: target});
	if(e != undefined){return e;}
}
function input(attr, data, target) {
    var e = elementBuild({ type: "input", attr: attr, data: data, target: target });
    if (e != undefined) { return e; }
}
function ul(attr, data, target) {
    var e = elementBuild({ type: "ul", attr: attr, data: data, target: target });
    if (e != undefined) { return e; }
}
function il(attr, data, target) {
    var e = elementBuild({ type: "il", attr: attr, data: data, target: target });
    if (e != undefined) { return e; }
}