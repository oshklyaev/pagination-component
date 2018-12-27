({
    setPaginationAttributes : function(component, event, helper) {
        var paginationValues = component.get("v.paginationValues");

        if ($A.util.isEmpty(paginationValues) || !isFinite(paginationValues[0])) {
            var values = [5, 10, 15, 20];
            component.set("v.paginationValues", values);
        }

        component.set("v.paginationInterval", component.get("v.paginationValues")[0]);
        component.set("v.paginationEnd", component.get("v.paginationValues")[0]);
    },

    setPaginationParameters : function(component, event, helper) {
        var paginationData = component.get("v.paginationData");

        if (!$A.util.isEmpty(paginationData)) {
            var paginationInterval = parseInt(component.get("v.paginationInterval"), 10);

            var elementsAmount = paginationData.length;
            var maxPaginationPosition = Math.ceil(elementsAmount / paginationInterval);

            component.set("v.paginationStart", 0);
            component.set("v.paginationEnd", paginationInterval);
            component.set("v.currentPaginationPosition", 1);
            component.set("v.maxPaginationPosition", maxPaginationPosition);
        } else {
            component.set("v.currentPaginationPosition", 1);
            component.set("v.maxPaginationPosition", 1);
        }
    },

    performPagination : function(component, event, helper) {
        var action = event.getSource().getLocalId();

        var paginationStart = component.get("v.paginationStart");
        var paginationEnd = component.get("v.paginationEnd");
        var currentPaginationPosition = component.get("v.currentPaginationPosition");
        var maxPaginationPosition = component.get("v.maxPaginationPosition");
        var paginationInterval = parseInt(component.get("v.paginationInterval"), 10);

        switch (action) {
            case "stepBackward":
                component.set("v.paginationStart", paginationStart - paginationInterval);
                component.set("v.paginationEnd", paginationEnd - paginationInterval);
                component.set("v.currentPaginationPosition", currentPaginationPosition - 1);
                break;
            case "stepForward":
                component.set("v.paginationStart", paginationStart + paginationInterval);
                component.set("v.paginationEnd", paginationEnd + paginationInterval);
                component.set("v.currentPaginationPosition", currentPaginationPosition + 1);
                break;
            case "toFirstPage":
                component.set("v.paginationStart", 0);
                component.set("v.paginationEnd", paginationInterval);
                component.set("v.currentPaginationPosition", 1);
                break;
            case "toLastPage":
                component.set("v.paginationStart", paginationInterval * (maxPaginationPosition - 1));
                component.set("v.paginationEnd", paginationInterval * maxPaginationPosition);
                component.set("v.currentPaginationPosition", maxPaginationPosition);
                break;
        }
    }
})