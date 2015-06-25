describe 'Categories', () ->
  categories = {}
  beforeEach ->
    categories = new Categories()

  it 'should return a list of categories', () ->
    expect(categories.getCategories().length).toBe 5


describe 'Apprenticeships', () ->
  apprenticeships = {}

  beforeEach ->
    apprenticeshipsList =
      sparkbox: 'development',
      thoughtbot: 'design',
      upstatement: 'ux',
      merge: 'software',
      apple: 'mobile'

    apprenticeships = new Apprenticeships(apprenticeshipsList)