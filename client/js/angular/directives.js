app.directive("ingredientEditModal", function() {
    return {
        restrict: 'E',
        scope: {
        	ingredient: "="
        },
        template:
        '<div data-nodrag id="{{ingredient.$$hashKey | chopObject}}" class="modal">
          <div class="modal-content">
            <h4>Edit Ingredient</h4>
            <input type="text" ng-model="ingredient.imperialQuantity" placeholder="amount">
            <input type="text" ng-model="ingredient.imperialUnits" placeholder="units">
            <input type="text" ng-model="ingredient.ingredientName" placeholder="name">
            <input type="text" ng-model="ingredient.description" placeholder="description (optional)">
          </div>
          <div class="modal-footer">
            <a href="#/create" class="modal-action modal-close waves-effect waves-green btn-flat">Done</a>
          </div>
        </div>'
    };
});