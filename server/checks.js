'use strict';

module.exports = {
  checkWarnings: function(app) {
    // Check if required config vars are present
    
    // Check if running in development mode
    if (app.get('env') === 'development') {
      console.log('Server running in development mode');
    }
  }
}
