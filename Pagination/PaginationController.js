({
    setAttributes : function(component, event, helper) {
        helper.setPaginationAttributes(component, event, helper);
    },

    setParameters : function(component, event, helper) {
        helper.setPaginationParameters(component, event, helper);
    },

    paginationAction : function(component, event, helper) {
        helper.performPagination(component, event, helper);
    }
})