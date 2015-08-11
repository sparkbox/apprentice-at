var Apprenticeship;

Apprenticeship = (function() {
  function Apprenticeship(name, category, hidden) {
    this.name = name;
    this.category = category;
    this.hidden = hidden != null ? hidden : false;
  }

  Apprenticeship.prototype.hide = function() {
    return this.hidden = true;
  };

  Apprenticeship.prototype.show = function() {
    return this.hidden = false;
  };

  return Apprenticeship;

})();

describe('Apprenticeship', function() {
  var apprenticeship;
  apprenticeship = null;
  beforeEach(function() {
    return apprenticeship = new Apprenticeship('sparkbox', 'development');
  });
  it('should hide if you tell it to hide', function() {
    apprenticeship.hide();
    return expect(apprenticeship.hidden).toBe(true);
  });
  it('should show if you tell it to show', function() {
    apprenticeship.show();
    return expect(apprenticeship.hidden).toBe(false);
  });
  it('should create objects that know about their own category', function() {
    return expect(apprenticeship.category).toBe('development');
  });
  it('should create objects that know about their own visibility', function() {
    return expect(apprenticeship.hidden).toBe(false);
  });
  return it('should create objects that know about their own name', function() {
    return expect(apprenticeship.name).toBe('sparkbox');
  });
});

describe('Apprenticeships', function() {
  var apprenticeships, list;
  apprenticeships = null;
  list = [];
  beforeEach(function() {
    list.push(new Apprenticeship('sparkbox', 'development', true));
    list.push(new Apprenticeship('thoughtbot', 'development'));
    list.push(new Apprenticeship('upstatement', 'ux', true));
    list.push(new Apprenticeship('merge', 'ux'));
    return apprenticeships = new Apprenticeships(list);
  });
  it('should create new apprenticeship objects for each apprenticeship', function() {
    return expect(apprenticeships.list.length).toBe(4);
  });
  return describe('filtering', function() {
    it('makes all apprenticeships visible if all is the selected category', function() {
      var apprenticeship, i, len, results;
      apprenticeships.filter('all');
      results = [];
      for (i = 0, len = list.length; i < len; i++) {
        apprenticeship = list[i];
        results.push(expect(apprenticeship.hidden).toBe(false));
      }
      return results;
    });
    return it('makes a category visible if we filter that category', function() {
      apprenticeships.filter('development');
      expect(list[0].hidden).toBe(false);
      expect(list[1].hidden).toBe(false);
      expect(list[2].hidden).toBe(true);
      return expect(list[3].hidden).toBe(true);
    });
  });
});
