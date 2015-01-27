
/////////////
// Datetime Picker Components
////////////


App.DatetimePickerComponent = Ember.Component.extend({
    pickerWrapper: null,
    pickerData: null,
    classNames: ['input-small'],
    format: "MM/DD/YYYY",
    placeholder: Ember.computed.alias('format'),
    iconOnRight: true,

    /**
     * Create function */
    didInsertElement: function () {
        var self = this;
        var format = this.get('format');


        var pickerWrapper = this.$().datetimepicker({
            format: format
        });
        // this.set('pickerWrapper', pickerWrapper);

        var pickerData = pickerWrapper.data("DateTimePicker");
        this.set('pickerData', pickerData);
        
        if(this.get('datetime'))
            pickerData.setDate(this.get('datetime'));
        
        pickerWrapper.on('dp.change', function (ev) {
            var date = moment(ev.date.toISOString());
            alert(date);
            //self.sendAction('action', ev.format());
            self.set('datetime', date);
            pickerData.hide();
        });

    },

    datetimeChanged: function () {
        // get model datetime
        var modelDatetime = this.get('datetime');
        // get picker datetime
        var picker = this.get('pickerData');
        var pickerDatetime = picker.getDate();
        // if not the same the overwrite model over picker 
        if (modelDatetime != pickerDatetime) {
            picker.setDate(modelDatetime);
        }
    }.observes('datetime')
});




//////////////////////////////////
// Radio Button Outer Component/////////
/////////////////////////////////

App.RadioButtonOuterComponent = Ember.Component.extend({
    tagName : "label",
    classNames: ["radio-inline", "col-sm-4 col-sm-offset-2"]
});

App.RadioButton = Ember.Component.extend({
    tagName : "input",
    type: "radio",
    attributeBindings : [ "name", "type", "value"],
    click : function(e) {
        this.set("selected", this.$().val());
    }
});

Ember.Handlebars.helper('radio-button',App.RadioButton);

