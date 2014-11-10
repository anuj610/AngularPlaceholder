angular.module('placeholder', [
    
])
.controller('MainCtrl', function(){
    
})
.directive('myPlaceholder', function(){
    return {
        scope: {placeholder : '@myPlaceholder'},
        restrict: 'A',
        replace: false,
        link: function(scope, elem, attrs) {
            
            elem.css('color', '#999');
            elem.val(scope.placeholder);
            
            elem.on('focus', function(){
                if(elem.val() === scope.placeholder) {
                    elem.val('');
                    elem.css('color', '#000');
                }
            });
            elem.on('blur', function(){
                if(elem.val() === '') {
                    elem.val(scope.placeholder);
                    elem.css('color', '#999');
                }
            });
        }
      };
});

