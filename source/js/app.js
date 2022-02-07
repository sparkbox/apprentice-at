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
