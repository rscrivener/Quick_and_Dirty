
function update(id, element){
	if(element != undefined && id != undefined){
		var e = {
			id: id,
			element: u({id: id},element)
		};
		return e;
	}else if(id != undefined && element == undefined){
		console.log("updating ui");
		console.log(id);
		$("#"+id).remove();
		build(updates[id].element, updates[id].lastElement);
	}else{
		$(".QD").remove();
		App(update["app"]);
	}
}
var updates = {};
function aesBinder(element, obj) {
    if (obj.hasOwnProperty("click")) {
        $(element).click(obj["click"])
    } if (obj.hasOwnProperty("mouseover")) {
        $(element).mouseover(obj["mouseover"]);
    } if (obj.hasOwnProperty("mouseout")) {
        $(element).mouseout("mouseout");
    } if (obj.hasOwnProperty("hover") && obj.enter != undefined && obj.exit != undefined) {
        $(element).hover(obj.enter, obj.exit);
    } if (obj.hasOwnProperty("dbclick")) {
        $(element).dbclick(obj.dbclick);
    } if (obj.hasOwnProperty("change")) {
        $(element).change(obj.change);
    }
}
function build(element, lastElement){
	if(typeof(element) === "object" && !Array.isArray(element)){
		if(element.id != undefined){
			updates[element.id] = {
				element: element.element,
				lastElement: lastElement
			};
			build(element.element, lastElement);
		}else{
			if( element.attr.attr != undefined){
				var attr = element.attr.attr;
				var newelem = $(element.type, attr).addClass("QD").appendTo(lastElement);
				var css;
				var aes;
				if(element.attr.css != undefined){
				    css = element.attr.css;
					$(newelem).css(css);
				}if(element.attr.aes != undefined){
				    aes = element.attr.aes;
				    aesBinder(newelem, aes);
				}
			} else {
				var newelem = $(element.type, element.attr).addClass("QD").appendTo(lastElement);
				if(Array.isArray(element.data) && element.data.length > 0){
					for(var i = 0; i < element.data.length; i++){
						if(typeof(element.data[i]) === "object"){
							build(element.data[i], newelem);
						}else if(typeof(element.data[i]) === "string" && element.data[i].length > 0){
							$(newelem).html(element.data[i]);
						}else if(typeof(element.data[i]) === "function"){
							var newElem = element.data[i]();
							build(newElem, newelem);
						}
					}
				}else if(typeof(element.data) === "string" && element.data.length > 0){
					$(newelem).html(element.data);
				}else if(typeof(element.data) === "function"){
					var newElem = element.data();
					build(newElem, newelem);
				}
			}
		}
	}else if(Array.isArray(element)){
		if(element.length > 0){
			for(var i = 0; i < element.length; i++){
				build(element[i], lastElement);
			}
		}
	}else if(typeof(element) === "string"){
		$(lastElement).append(element);
	}else if(typeof(element) === "function"){
		var newElem = element();
		build(newElem, lastElement);
	}
}
var mode;
function mode(m){
	mode = m.toString();
}
function App(App){
	update["app"] = App;
	if(App.head != undefined && App.body != undefined){
		if(Array.isArray(App.head)){
			for(var i = 0; i < App.head.length; i++){
				build(App.head[i], $("head"));
			}
		}else{
			build(App.head, $("head"));
		}if(Array.isArray(App.body)){
			for(var i = 0; i < App.body.length; i++){
				build(App.body[i], $("body"));
			}
		}else{
			build(App.body, $("body"));
		}
	}else {
		build(App, $("body"));
	}
}

