const validation = function() {
  $('form').validate({
    rules: {
      name: "required",
      url: {
        required: true,
        url: true
      },
      category: "required",
      duration: {
        required: true,
        min: 1,
        number: true
      },
      summary: "required",
      location: "required",
      learn_more: {
        required: true,
        url: true
      },
     apprentice: {
        required: true,
        email: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      compensation: "Your apprenticeship must be paid",
      name: "Please enter your company name",
      url: {
        required: "Please enter your company website",
        url: "Please be sure your URL is written in this format: http://www.example.com"
      },
      category: "Please select a category",
      duration: {
        required: "Please enter a duration",
        min: "Please enter a number greater than 0",
        number: "Please enter a number"
      },
      summary: "Please enter a summary of the apprenticeship",
      location: "Please enter a location",
      learn_more :{
        required: "Please enter a link to the application",
        url: "Please be sure your URL is written in this format: http://www.example.com"
      },
      apprentice: {
        required: "Please enter a past apprentice email",
        email: "Please enter a valid email address"
      },
      email: {
        required: "Please enter an email address",
        email: "Please enter a valid email address"
      }
    }
  })

  return $('input[type="radio"]').on('click', function(e) {
    if ($('#compensation_no').is(':checked')) {
      $('#compensation_no').addClass('invalid');
      $('#compensation_alert').removeClass('hidden');
      return $('#submit_form').attr('disabled', 'disabled');
    } else {
      $('#compensation_no').removeClass('invalid');
      $('#compensation_alert').addClass('hidden');
      return $('#submit_form').removeAttr('disabled');
    }
  });
};


var Apprenticeship, Apprenticeships;

//  The Apprenticeship class creates a new instance of an apprenticeship
Apprenticeship = (function() {
  function Apprenticeship(el) {
    this.$el = $(el);
    this.category = this.$el.data('category');
    this.name = this.$el.find('.apprenticeship__header').text() + ' ' + this.category;
    this.hidden = false;
  }

  // Hides individual apprenticeships
  Apprenticeship.prototype.hide = function() {
    this.$el.hide();
    return this.hidden = true;
  };

  // Shows individual apprenticeships
  Apprenticeship.prototype.show = function() {
    this.$el.show();
    return this.hidden = false;
  };

  // Adds a class signifying that this is the last visible apprenticeship
  Apprenticeship.prototype.addLastClass = function() {
    return this.$el.addClass('last');
  };

  // Removes the class applied by the above method
  Apprenticeship.prototype.removeLastClass = function() {
    return this.$el.removeClass('last');
  };

  return Apprenticeship;

})();

// The Apprenticeships class takes in a list of individual apprenticeships
Apprenticeships = (function() {
  function Apprenticeships(list1) {
    this.list = list1;
  }

// Hides apprenticeships except for those in the selected category
  Apprenticeships.prototype.filter = function(selectedCategory) {
    var apprenticeship, i, len, ref;
    ref = this.list;
    for (i = 0, len = ref.length; i < len; i++) {
      apprenticeship = ref[i];
      if (selectedCategory === 'all' || apprenticeship.category === selectedCategory) {
        apprenticeship.show();
      } else {
        apprenticeship.hide();
      }
    }
    this.cleanUp();
    return this.list;
  };

  // Toggles .last on the last visible apprenticeship for styles
  Apprenticeships.prototype.cleanUp = function() {
    var apprenticeship, i, len, ref, visibleList;
    visibleList = [];
    ref = this.list;
    for (i = 0, len = ref.length; i < len; i++) {
      apprenticeship = ref[i];
      apprenticeship.removeLastClass();
      if (apprenticeship.hidden === false) {
        visibleList.push(apprenticeship);
      }
    }
    return visibleList[visibleList.length - 1].addLastClass();
  };

  return Apprenticeships;

})();

// jQuery time on DOM ready
$(document).ready(function() {
  var apprenticeships, list;
  list = [];
  // Iterates through each apprenticeship in the DOM and instantiates it into a list
  $('.js-apprenticeship').each(function() {
    return list.push(new Apprenticeship(this));
  });

  // Instantiates the group of apprenticeships from the list of apprenticeships
  apprenticeships = new Apprenticeships(list);
    // Adds a click handler to the filter buttons
  $('.category__item').on('click', function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      event.returnValue = false;
    }
    // Adds and removes active state on filter buttons
    $('.category__item.is-active').removeClass('is-active');
    $(this).addClass('is-active');
     // Filters visible apprenticeships based on the data attribute of clicked button
    return apprenticeships.filter($(this).data('filters'));
  });
  return validation();
});

/*!
 * AnchorJS - v1.2.1 - 2015-07-02
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */
function AnchorJS(A){"use strict";this.options=A||{},this._applyRemainingDefaultOptions=function(A){this.options.icon=this.options.hasOwnProperty("icon")?A.icon:"",this.options.visible=this.options.hasOwnProperty("visible")?A.visible:"hover",this.options.placement=this.options.hasOwnProperty("placement")?A.placement:"right",this.options.class=this.options.hasOwnProperty("class")?A.class:""},this._applyRemainingDefaultOptions(A),this.add=function(A){var e,t,o,n,i,s,a,l,r,h,c,g;if(this._applyRemainingDefaultOptions(this.options),A){if("string"!=typeof A)throw new Error("The selector provided to AnchorJS was invalid.")}else A="h1, h2, h3, h4, h5, h6";if(e=document.querySelectorAll(A),0===e.length)return!1;for(this._addBaselineStyles(),t=document.querySelectorAll("[id]"),o=[].map.call(t,function(A){return A.id}),i=0;i<e.length;i++){if(e[i].hasAttribute("id"))n=e[i].getAttribute("id");else{s=e[i].textContent,a=s.replace(/[^\w\s-]/gi,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").substring(0,64).replace(/^-+|-+$/gm,"").toLowerCase(),h=a,r=0;do void 0!==l&&(h=a+"-"+r),l=o.indexOf(h),r+=1;while(-1!==l);l=void 0,o.push(h),e[i].setAttribute("id",h),n=h}c=n.replace(/-/g," "),g=document.createElement("a"),g.className="anchorjs-link "+this.options.class,g.href="#"+n,g.setAttribute("aria-label","Anchor link for: "+c),g.setAttribute("data-anchorjs-icon",this.options.icon),"always"===this.options.visible&&(g.style.opacity="1"),""===this.options.icon&&(g.style.fontFamily="anchorjs-icons",g.style.fontStyle="normal",g.style.fontVariant="normal",g.style.fontWeight="normal",g.style.lineHeight=1),"left"===this.options.placement?(g.style.position="absolute",g.style.marginLeft="-1em",g.style.paddingRight="0.5em",e[i].insertBefore(g,e[i].firstChild)):(g.style.paddingLeft="0.375em",e[i].appendChild(g))}return this},this.remove=function(A){for(var e,t=document.querySelectorAll(A),o=0;o<t.length;o++)e=t[o].querySelector(".anchorjs-link"),e&&t[o].removeChild(e);return this},this._addBaselineStyles=function(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style"),t=" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",o=" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",n=' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',i=" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }";e.className="anchorjs",e.appendChild(document.createTextNode("")),A=document.head.querySelector('[rel="stylesheet"], style'),void 0===A?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(t,e.sheet.cssRules.length),e.sheet.insertRule(o,e.sheet.cssRules.length),e.sheet.insertRule(i,e.sheet.cssRules.length),e.sheet.insertRule(n,e.sheet.cssRules.length)}}}var anchors=new AnchorJS;
