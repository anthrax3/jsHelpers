(function(){var a={};if(typeof module!="undefined"&&module.exports)module.exports=a;else if(typeof YUI!="undefined"&&YUI.add)YUI.add("grandcentral",function(b){b.GrandCentral=a},"1.0.6",{requires:[]});else if(typeof window=="object")window.GrandCentral=a;else return;var b=a.Operators={};b[""]=function(a,c){return a instanceof Array?b["in"].apply(this,arguments):a instanceof RegExp?b.re.apply(this,arguments):a instanceof Function?b.ld.apply(this,arguments):b.eq.apply(this,arguments)},b.eq=function(a,c){if(arguments.length<2)return!1;if(a===null||a===undefined||c===null||c===undefined)return c===a;switch(a.constructor){case String:case Number:case Boolean:return a.constructor==c.constructor&&a==c;default:if(a instanceof Array){if(!(c instanceof Array))return!1;if(c.length!=a.length)return!1;for(var d=0;d<a.length;d++)if(!b.eq(a[d],c[d]))return!1;return!0}if(!(c instanceof Object))return!1;for(var e in a){var f=e.lastIndexOf("$"),g,h,i=a[e],j;f<0?(g=e,j=""):(g=e.substr(0,f),j=e.substr(f+1));if(!b[j])throw"operator doesn't exist: "+j;if(g in c){h=c[g];if(!b[j](i,h))return!1}else if(!b[j](i))return!1}return!0}},b.ne=function(a,c){return!b.eq(a,c)},b.lt=function(a,b){return arguments.length==2&&b<a},b.lte=function(a,b){return arguments.length==2&&b<=a},b.gt=function(a,b){return arguments.length==2&&b>a},b.gte=function(a,b){return arguments.length==2&&b>=a},b["in"]=function(a,c){if(arguments.length<2)return!1;for(var d=0;d<a.length;d++)if(b.eq(a[d],c))return!0;return!1},b.nin=function(a,c){return arguments.length==2&&!b["in"](a,c)},b.all=function(a,c){if(arguments.length<2)return!1;if(!(c instanceof Array))return!1;var d;for(var e=0;e<a.length;e++){d=!1;for(var f=0;f<c.length;f++)if(b.eq(a[e],c[f])){d=!0;break}if(!d)return!1}return!0},b.ex=function(a,b){if(a===!0)return arguments.length==2;if(a===!1)return arguments.length==1;return!1},b.re=function(a,b){return arguments.length==2&&b&&b.match&&b.match(a)},b.f=function(a,b){return a.call(b,b)};var c=function(a){return function(c){return arguments.length>0?b[""](a,c):b[""](a)}},d=function(a){var b=[];a.listen=function(d,e){d instanceof Function||(d=c(d)),b.push({filter:d,handler:e});return a},a.call=function(c){for(var d=0;d<b.length;d++)b[d].filter.apply(this,arguments)&&b[d].handler(c);return a}};a.extend=function(a){d(a);return a},a.extend(a)})()