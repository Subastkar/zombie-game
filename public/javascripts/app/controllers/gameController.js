ZombieWorld.Controller.gameController = {

  init: function(){
    ZombieWorld.Controller.socketController.init();
    
    var getConfiguration = $.getJSON('/configuration?q=map');
    
    getConfiguration.done(function(data){
      ZombieWorld.Map = data;

      var width = ZombieWorld.Map.width * ZombieWorld.Map.tile.width;
      var height = ZombieWorld.Map.height * ZombieWorld.Map.tile.height;

      Crafty.init(width, height, 'game-area');
      Crafty.background('rgb(56,208,135)');
    });

    getConfiguration.fail(function(){ZombieWorld.onError('There was a problem loading the map data.')});
  }
};
