class Coffee
  constructor: (@name, @strength=1, @inventory=0) ->
 
  pourClick: ->
    $("#pour-#{@name}").click (event) =>
      if @inventory isnt 0
        @inventory -= 1
        alert "Poured a cup of #{@name}"
