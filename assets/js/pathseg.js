(function(){if(!("SVGPathSeg" in window)){window.SVGPathSeg=function(b,c,a){this.pathSegType=b;this.pathSegTypeAsLetter=c;this._owningPathSegList=a};window.SVGPathSeg.prototype.classname="SVGPathSeg";window.SVGPathSeg.PATHSEG_UNKNOWN=0;window.SVGPathSeg.PATHSEG_CLOSEPATH=1;window.SVGPathSeg.PATHSEG_MOVETO_ABS=2;window.SVGPathSeg.PATHSEG_MOVETO_REL=3;window.SVGPathSeg.PATHSEG_LINETO_ABS=4;window.SVGPathSeg.PATHSEG_LINETO_REL=5;window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6;window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7;window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8;window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9;window.SVGPathSeg.PATHSEG_ARC_ABS=10;window.SVGPathSeg.PATHSEG_ARC_REL=11;window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12;window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13;window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14;window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15;window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16;window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17;window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18;window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19;window.SVGPathSeg.prototype._segmentChanged=function(){if(this._owningPathSegList){this._owningPathSegList.segmentChanged(this)}};window.SVGPathSegClosePath=function(a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",a)};window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"};window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter};window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(undefined)};window.SVGPathSegMovetoAbs=function(b,a,c){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",b);this._x=a;this._y=c};window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"};window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y};window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(undefined,this._x,this._y)};Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegMovetoRel=function(b,a,c){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",b);this._x=a;this._y=c};window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"};window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y};window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(undefined,this._x,this._y)};Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegLinetoAbs=function(b,a,c){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",b);this._x=a;this._y=c};window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"};window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y};window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(undefined,this._x,this._y)};Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegLinetoRel=function(b,a,c){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",b);this._x=a;this._y=c};window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"};window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y};window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(undefined,this._x,this._y)};Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoCubicAbs=function(d,a,g,c,f,b,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",d);this._x=a;this._y=g;this._x1=c;this._y1=f;this._x2=b;this._y2=e};window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"};window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y};window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(undefined,this._x,this._y,this._x1,this._y1,this._x2,this._y2)};Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(a){this._x1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(a){this._y1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(a){this._x2=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(a){this._y2=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoCubicRel=function(d,a,g,c,f,b,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",d);this._x=a;this._y=g;this._x1=c;this._y1=f;this._x2=b;this._y2=e};window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"};window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y};window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(undefined,this._x,this._y,this._x1,this._y1,this._x2,this._y2)};Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(a){this._x1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(a){this._y1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(a){this._x2=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(a){this._y2=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoQuadraticAbs=function(c,a,e,b,d){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",c);this._x=a;this._y=e;this._x1=b;this._y1=d};window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"};window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y};window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(undefined,this._x,this._y,this._x1,this._y1)};Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(a){this._x1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(a){this._y1=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoQuadraticRel=function(c,a,e,b,d){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",c);this._x=a;this._y=e;this._x1=b;this._y1=d};window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"};window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y};window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(undefined,this._x,this._y,this._x1,this._y1)};Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(a){this._x1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(a){this._y1=a;this._segmentChanged()},enumerable:true});window.SVGPathSegArcAbs=function(d,a,h,c,b,g,f,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",d);this._x=a;this._y=h;this._r1=c;this._r2=b;this._angle=g;this._largeArcFlag=f;this._sweepFlag=e};window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"};window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y};window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(undefined,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)};Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(a){this._r1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(a){this._r2=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(a){this._angle=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(a){this._largeArcFlag=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(a){this._sweepFlag=a;this._segmentChanged()},enumerable:true});window.SVGPathSegArcRel=function(d,a,h,c,b,g,f,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",d);this._x=a;this._y=h;this._r1=c;this._r2=b;this._angle=g;this._largeArcFlag=f;this._sweepFlag=e};window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"};window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y};window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(undefined,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)};Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(a){this._r1=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(a){this._r2=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(a){this._angle=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(a){this._largeArcFlag=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(a){this._sweepFlag=a;this._segmentChanged()},enumerable:true});window.SVGPathSegLinetoHorizontalAbs=function(b,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",b);this._x=a};window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"};window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x};window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(undefined,this._x)};Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});window.SVGPathSegLinetoHorizontalRel=function(b,a){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",b);this._x=a};window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"};window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x};window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(undefined,this._x)};Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});window.SVGPathSegLinetoVerticalAbs=function(a,b){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",a);this._y=b};window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"};window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y};window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(undefined,this._y)};Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegLinetoVerticalRel=function(a,b){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",a);this._y=b};window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"};window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y};window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(undefined,this._y)};Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoCubicSmoothAbs=function(c,a,e,b,d){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",c);this._x=a;this._y=e;this._x2=b;this._y2=d};window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"};window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y};window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined,this._x,this._y,this._x2,this._y2)};Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(a){this._x2=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(a){this._y2=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoCubicSmoothRel=function(c,a,e,b,d){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",c);this._x=a;this._y=e;this._x2=b;this._y2=d};window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"};window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y};window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(undefined,this._x,this._y,this._x2,this._y2)};Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(a){this._x2=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(a){this._y2=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoQuadraticSmoothAbs=function(b,a,c){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",b);this._x=a;this._y=c};window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"};window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y};window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined,this._x,this._y)};Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathSegCurvetoQuadraticSmoothRel=function(b,a,c){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",b);this._x=a;this._y=c};window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype);window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"};window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y};window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined,this._x,this._y)};Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a;this._segmentChanged()},enumerable:true});Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a;this._segmentChanged()},enumerable:true});window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(undefined)};window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(a,b){return new window.SVGPathSegMovetoAbs(undefined,a,b)};window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(a,b){return new window.SVGPathSegMovetoRel(undefined,a,b)};window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(a,b){return new window.SVGPathSegLinetoAbs(undefined,a,b)};window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(a,b){return new window.SVGPathSegLinetoRel(undefined,a,b)};window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(a,f,c,e,b,d){return new window.SVGPathSegCurvetoCubicAbs(undefined,a,f,c,e,b,d)};window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(a,f,c,e,b,d){return new window.SVGPathSegCurvetoCubicRel(undefined,a,f,c,e,b,d)};window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(a,d,b,c){return new window.SVGPathSegCurvetoQuadraticAbs(undefined,a,d,b,c)};window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(a,d,b,c){return new window.SVGPathSegCurvetoQuadraticRel(undefined,a,d,b,c)};window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(a,g,c,b,f,e,d){return new window.SVGPathSegArcAbs(undefined,a,g,c,b,f,e,d)};window.SVGPathElement.prototype.createSVGPathSegArcRel=function(a,g,c,b,f,e,d){return new window.SVGPathSegArcRel(undefined,a,g,c,b,f,e,d)};window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(a){return new window.SVGPathSegLinetoHorizontalAbs(undefined,a)};window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(a){return new window.SVGPathSegLinetoHorizontalRel(undefined,a)};window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(a){return new window.SVGPathSegLinetoVerticalAbs(undefined,a)};window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(a){return new window.SVGPathSegLinetoVerticalRel(undefined,a)};window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(a,d,b,c){return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined,a,d,b,c)};window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(a,d,b,c){return new window.SVGPathSegCurvetoCubicSmoothRel(undefined,a,d,b,c)};window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(a,b){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined,a,b)};window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(a,b){return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined,a,b)};if(!("getPathSegAtLength" in window.SVGPathElement.prototype)){window.SVGPathElement.prototype.getPathSegAtLength=function(c){if(c===undefined||!isFinite(c)){throw"Invalid arguments."}var b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d",this.getAttribute("d"));var a=b.pathSegList.numberOfItems-1;if(a<=0){return 0}do{b.pathSegList.removeItem(a);if(c>b.getTotalLength()){break}a--}while(a>0);return a}}}if(!("SVGPathSegList" in window)){window.SVGPathSegList=function(a){this._pathElement=a;this._list=this._parsePath(this._pathElement.getAttribute("d"));this._mutationObserverConfig={attributes:true,attributeFilter:["d"]};this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this));this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)};window.SVGPathSegList.prototype.classname="SVGPathSegList";Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){this._checkPathSynchronizedToList();return this._list.length},enumerable:true});Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){if(!this._pathSegList){this._pathSegList=new window.SVGPathSegList(this)}return this._pathSegList},enumerable:true});Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:true});Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:true});Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:true});window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())};window.SVGPathSegList.prototype._updateListFromPathMutations=function(b){if(!this._pathElement){return}var a=false;b.forEach(function(c){if(c.attributeName=="d"){a=true}});if(a){this._list=this._parsePath(this._pathElement.getAttribute("d"))}};window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect();this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list));this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)};window.SVGPathSegList.prototype.segmentChanged=function(a){this._writeListToPath()};window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList();this._list.forEach(function(a){a._owningPathSegList=null});this._list=[];this._writeListToPath()};window.SVGPathSegList.prototype.initialize=function(a){this._checkPathSynchronizedToList();this._list=[a];a._owningPathSegList=this;this._writeListToPath();return a};window.SVGPathSegList.prototype._checkValidIndex=function(a){if(isNaN(a)||a<0||a>=this.numberOfItems){throw"INDEX_SIZE_ERR"}};window.SVGPathSegList.prototype.getItem=function(a){this._checkPathSynchronizedToList();this._checkValidIndex(a);return this._list[a]};window.SVGPathSegList.prototype.insertItemBefore=function(b,a){this._checkPathSynchronizedToList();if(a>this.numberOfItems){a=this.numberOfItems}if(b._owningPathSegList){b=b.clone()}this._list.splice(a,0,b);b._owningPathSegList=this;this._writeListToPath();return b};window.SVGPathSegList.prototype.replaceItem=function(b,a){this._checkPathSynchronizedToList();if(b._owningPathSegList){b=b.clone()}this._checkValidIndex(a);this._list[a]=b;b._owningPathSegList=this;this._writeListToPath();return b};window.SVGPathSegList.prototype.removeItem=function(a){this._checkPathSynchronizedToList();this._checkValidIndex(a);var b=this._list[a];this._list.splice(a,1);this._writeListToPath();return b};window.SVGPathSegList.prototype.appendItem=function(a){this._checkPathSynchronizedToList();if(a._owningPathSegList){a=a.clone()}this._list.push(a);a._owningPathSegList=this;this._writeListToPath();return a};window.SVGPathSegList._pathSegArrayAsString=function(b){var a="";var c=true;b.forEach(function(d){if(c){c=false;a+=d._asPathString()}else{a+=" "+d._asPathString()}});return a};window.SVGPathSegList.prototype._parsePath=function(c){if(!c||c.length==0){return[]}var b=this;var g=function(){this.pathSegList=[]};g.prototype.appendSegment=function(h){this.pathSegList.push(h)};var d=function(h){this._string=h;this._currentIndex=0;this._endIndex=this._string.length;this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN;this._skipOptionalSpaces()};d.prototype._isCurrentSpace=function(){var h=this._string[this._currentIndex];return h<=" "&&(h==" "||h=="\n"||h=="\t"||h=="\r"||h=="\f")};d.prototype._skipOptionalSpaces=function(){while(this._currentIndex<this._endIndex&&this._isCurrentSpace()){this._currentIndex++}return this._currentIndex<this._endIndex};d.prototype._skipOptionalSpacesOrDelimiter=function(){if(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&this._string.charAt(this._currentIndex)!=","){return false}if(this._skipOptionalSpaces()){if(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)==","){this._currentIndex++;this._skipOptionalSpaces()}}return this._currentIndex<this._endIndex};d.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex};d.prototype.peekSegmentType=function(){var h=this._string[this._currentIndex];return this._pathSegTypeFromChar(h)};d.prototype._pathSegTypeFromChar=function(h){switch(h){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL;case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS;case"a":return window.SVGPathSeg.PATHSEG_ARC_REL;case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return window.SVGPathSeg.PATHSEG_UNKNOWN}};d.prototype._nextCommandHelper=function(h,i){if((h=="+"||h=="-"||h=="."||(h>="0"&&h<="9"))&&i!=window.SVGPathSeg.PATHSEG_CLOSEPATH){if(i==window.SVGPathSeg.PATHSEG_MOVETO_ABS){return window.SVGPathSeg.PATHSEG_LINETO_ABS}if(i==window.SVGPathSeg.PATHSEG_MOVETO_REL){return window.SVGPathSeg.PATHSEG_LINETO_REL}return i}return window.SVGPathSeg.PATHSEG_UNKNOWN};d.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData()){return true}var h=this.peekSegmentType();return h==window.SVGPathSeg.PATHSEG_MOVETO_ABS||h==window.SVGPathSeg.PATHSEG_MOVETO_REL};d.prototype._parseNumber=function(){var p=0;var n=0;var i=1;var m=0;var j=1;var h=1;var q=this._currentIndex;this._skipOptionalSpaces();if(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="+"){this._currentIndex++}else{if(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="-"){this._currentIndex++;j=-1}}if(this._currentIndex==this._endIndex||((this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&this._string.charAt(this._currentIndex)!=".")){return undefined}var o=this._currentIndex;while(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9"){this._currentIndex++}if(this._currentIndex!=o){var l=this._currentIndex-1;var r=1;while(l>=o){n+=r*(this._string.charAt(l--)-"0");r*=10}}if(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="."){this._currentIndex++;if(this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9"){return undefined}while(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9"){i*=10;m+=(this._string.charAt(this._currentIndex)-"0")/i;this._currentIndex+=1}}if(this._currentIndex!=q&&this._currentIndex+1<this._endIndex&&(this._string.charAt(this._currentIndex)=="e"||this._string.charAt(this._currentIndex)=="E")&&(this._string.charAt(this._currentIndex+1)!="x"&&this._string.charAt(this._currentIndex+1)!="m")){this._currentIndex++;if(this._string.charAt(this._currentIndex)=="+"){this._currentIndex++}else{if(this._string.charAt(this._currentIndex)=="-"){this._currentIndex++;h=-1}}if(this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9"){return undefined}while(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9"){p*=10;p+=(this._string.charAt(this._currentIndex)-"0");this._currentIndex++}}var k=n+m;k*=j;if(p){k*=Math.pow(10,h*p)}if(q==this._currentIndex){return undefined}this._skipOptionalSpacesOrDelimiter();return k};d.prototype._parseArcFlag=function(){if(this._currentIndex>=this._endIndex){return undefined}var h=false;var i=this._string.charAt(this._currentIndex++);if(i=="0"){h=false}else{if(i=="1"){h=true}else{return undefined}}this._skipOptionalSpacesOrDelimiter();return h};d.prototype.parseSegment=function(){var i=this._string[this._currentIndex];var j=this._pathSegTypeFromChar(i);if(j==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN){return null}j=this._nextCommandHelper(i,this._previousCommand);if(j==window.SVGPathSeg.PATHSEG_UNKNOWN){return null}}else{this._currentIndex++}this._previousCommand=j;switch(j){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(b,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(b,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(b,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(b,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(b,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(b,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(b,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(b,this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:this._skipOptionalSpaces();return new window.SVGPathSegClosePath(b);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var h={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicRel(b,h.x,h.y,h.x1,h.y1,h.x2,h.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:var h={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicAbs(b,h.x,h.y,h.x1,h.y1,h.x2,h.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:var h={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicSmoothRel(b,h.x,h.y,h.x2,h.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:var h={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicSmoothAbs(b,h.x,h.y,h.x2,h.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:var h={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoQuadraticRel(b,h.x,h.y,h.x1,h.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:var h={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoQuadraticAbs(b,h.x,h.y,h.x1,h.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(b,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(b,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:var h={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcRel(b,h.x,h.y,h.x1,h.y1,h.arcAngle,h.arcLarge,h.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:var h={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcAbs(b,h.x,h.y,h.x1,h.y1,h.arcAngle,h.arcLarge,h.arcSweep);default:throw"Unknown path seg type."}};var a=new g();var e=new d(c);if(!e.initialCommandIsMoveTo()){return[]}while(e.hasMoreData()){var f=e.parseSegment();if(!f){return[]}a.appendSegment(f)}return a.pathSegList}}}());