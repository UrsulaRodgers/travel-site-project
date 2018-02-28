import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elements, offset) {
		this.itemsToReveal = elements;
		this.hideInitially();
		this.offset = offset;
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints () {
		const that = this;
		this.itemsToReveal.each(function(){
			let currentItem = this; //cannot assign this to element in the new instance of the Waypoint object - this will then refer to the object, rather than the element we wanted ot target
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--visible");
				},
				offset: that.offset //customise waypoints to trigger the handler a bit earlier 0 - 100 is top to bottom of viewport
			});
		});
	}
}

export default RevealOnScroll;