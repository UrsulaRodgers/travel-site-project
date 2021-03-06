import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks=$(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		const that = this;
		new Waypoint({
			element:that.headerTriggerElement[0], //0 points to the native dom element
			handler: function(direction) {
				if (direction === "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
				
			}
		});
	}

	createPageSectionWaypoints() {
		const that=this;
		this.pageSections.each(function(){
			let currentPageSection = this;
			new Waypoint({
				element:currentPageSection,
				handler:function(direction) {
					if (direction === "down") {
						let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("current-link");
						$(matchingHeaderLink).addClass("current-link");
					}
				},
				offset:"18%"
			});
			new Waypoint({
				element:currentPageSection,
				handler:function(direction) {
					if (direction === "up") {
						let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("current-link");
						$(matchingHeaderLink).addClass("current-link");
					}
				},
				offset:"-40%"
			});
		});
	}
}

export default StickyHeader;