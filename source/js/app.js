var Apprenticeship, Apprenticeships;

Apprenticeship = (function() {
  function Apprenticeship(el) {
    this.$el = $(el);
    this.category = this.$el.data('category');
    this.name = this.$el.find('.apprenticeship__header').text() + ' ' + this.category;
    this.hidden = false;
  }

  Apprenticeship.prototype.hide = function() {
    this.$el.hide();
    return this.hidden = true;
  };

  Apprenticeship.prototype.show = function() {
    this.$el.show();
    return this.hidden = false;
  };

  Apprenticeship.prototype.addLastClass = function() {
    return this.$el.addClass('last');
  };

  Apprenticeship.prototype.removeLastClass = function() {
    return this.$el.removeClass('last');
  };

  return Apprenticeship;

})();

Apprenticeships = (function() {
  function Apprenticeships(list1) {
    this.list = list1;
  }

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

$(document).ready(function() {
  var apprenticeships, list;
  list = [];
  $('.js-apprenticeship').each(function() {
    return list.push(new Apprenticeship(this));
  });
  apprenticeships = new Apprenticeships(list);
  $('.category__item').on('click', function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      event.returnValue = false;
    }
    $('.category__item.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    return apprenticeships.filter($(this).data('filters'));
  });
  return validation();
});
