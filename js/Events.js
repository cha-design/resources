/* Events.js */

class Events{

		constructor(){
			 this.events = [];
			 this.PRESS = false;
			 this.init = this.setEvents();
		}

		setEvents()
		{
			if (window.PointerEvent) {
				this.setPointerEvents();
				
			}else{
			
				this.setTouchEvents();
			}	
		}

		setPointerEvents(elem = ['stage.canvas'])
		{
			//stage.canvas.addEventListener('pointerdown',this.handlePointerDown,true);
			window.addEventListener('pointerdown', this.handleGestureStart, true);
  		window.addEventListener('pointermove', this.handleGestureMove, true);
  		window.addEventListener('pointerup', this.handleGestureEnd, true);
 			window.addEventListener('pointercancel', this.handleGestureEnd, true);
		}
		setTouchEvents()
		{
			window.addEventListener('touchstart',this.handleGestureStart,true);//handleTouchStart
			window.addEventListener("touchend", handleGestureEnd, false);
  		window.addEventListener("touchcancel", handleGestureEnd, false);
		}
		handleGestureStart(evt)
		{
			this.PRESS = true;
			//updateScore();
		}
		handleGestureEnd(evt)
		{
			this.PRESS = false;
		}

		handleGestureMove(evt)
		{

		}

		handleGestureUp(evt)
		{

		}

		handleGestureCancel(evt)
		{

		}
}

var events = new Events("window");
