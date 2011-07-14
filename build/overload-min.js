(function(){var Overload={};if(module&&module.exports)module.exports=Overload;else if(window)window.Overload=Overload;else return;var copySignature=function(a){var b=a.slice(0);a.more&&(b.more=!0);return b},parseSignature=function(signature){if(signature.replace(/(^\s+|\s+$)/ig,"")=="")signature=[];else{signature=signature.split(",");for(var i=0;i<signature.length;i++){var typeExpression=signature[i].replace(/(^\s+|\s+$)/ig,""),type=null;if(typeExpression=="*")type=Overload.Any;else if(typeExpression=="...")type=Overload.More;else try{type=eval("("+typeExpression+")")}catch(error){throw"type expression cannot be evaluated: "+typeExpression}signature[i]=type}}return signature},inheritanceComparator=function(a,b){return a==b?0:b==Overload.Any?1:a==Overload.Any?-1:a.prototype instanceof b?1:b.prototype instanceof a?-1:0},overloadComparator=function(a,b){var c=!1,d=!1,e=a.signature,f=b.signature;if(!e.more&&f.more)c=!0,e=copySignature(e),e.length=f.length;else if(e.more&&!f.more)d=!0,f=copySignature(f),f.length=e.length;else if(e.more&&f.more)if(e.length>f.length){f=copySignature(f);while(f.length<e.length)f[f.length]=Overload.Any}else if(e.length<f.length){e=copySignature(e);while(e.length<f.length)e[e.length]=Overload.Any}for(var g=0;g<e.length;g++){var h=inheritanceComparator(e[g],f[g]);h>0?c=!0:h<0&&(d=!0)}return c&&!d?1:!c&&d?-1:0},matchSignature=function(a,b){if(a.length<b.length)return!1;if(a.length>b.length&&!b.more)return!1;for(var c=0;c<b.length;c++)if(!(a[c]===null||a[c]===undefined||b[c]==Overload.Any||a[c]instanceof b[c]||a[c].constructor==b[c]))return!1;return!0};Overload.create=function(a){var b=[],c=function(a){var c=[];for(var d=0;d<b.length;d++)matchSignature(a,b[d].signature)&&c.push(b[d]);return c},d=function(a){var b=c(a);switch(b.length){case 0:return null;case 1:return b[0];default:b=b.sort(overloadComparator);return overloadComparator(b[b.length-1],b[b.length-2])>0?b[b.length-1]:null}},e=function(){var a=d(arguments);if(a){var b=Array.prototype.slice.call(arguments,0);if(b.length>a.signature.length){var c=b.splice(a.signature.length);b.push(c)}return a["function"].apply(this,b)}throw"cannot select a proper overload"};e.match=c,e.select=d,e.add=function(a,c){if(a instanceof Array)a=copySignature(a);else if(a.constructor==String)a=parseSignature(a);else throw"signature is neither a string nor an array";for(var d=0;d<a.length;d++){if(!(a[d]instanceof Function))throw"argument type should be a function";if(d<a.length-1&&a[d]==Overload.More)throw"arguments type cannot be used in any argument except the last one"}a[a.length-1]==Overload.More&&(a.length=a.length-1,a.more=!0),b.push({signature:a,"function":c});return this};return e},Overload.add=function(a,b){return Overload.create().add(a,b)},Overload.Any=function(){throw"this type is only an identifier and should not be instantiated"},Overload.More=function(){throw"this type is only an identifier and should not be instantiated"}})()