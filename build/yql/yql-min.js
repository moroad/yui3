YUI.add("yql",function(B){var A=function(D,E,C){this.query(D,E,C);};A.prototype.query=function(F,G,E){var C="",D=B.YQLRequest.PROTO;if(!E){E={};}E.q=F;E.format="json";if(!E.env){E.env=B.YQLRequest.ENV;}B.each(E,function(I,H){C+=H+"="+encodeURIComponent(I)+"&";});D+=B.YQLRequest.BASE_URL+C;B.jsonp(D,G);};A.PROTO="http";A.BASE_URL=":/"+"/query.yahooapis.com/v1/public/yql?";A.ENV="http:/"+"/datatables.org/alltables.env";B.YQLRequest=A;B.YQL=function(D,E,C){return new B.YQLRequest(D,E,C);};},"@VERSION@",{requires:["jsonp"]});