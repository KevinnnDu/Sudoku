/**
 * Created by Kevin on 6/23/2016.
 */
Ext.define('SudokuSolver.model.ThreeThreeMatrix', {
    extend: 'Ext.data.Model',

    fields: [
        
        /*
         The fields for this model. This is an Array of Ext.data.field.Field definition objects or simply the field name.
         If just a name is given, the field type defaults to auto.  For example:
         */


        { name: 'size',     type: 'auto' },
    ],

    Constructor: function() {
        this.size = new Array(3);
        for(var i=0; i<3; i++) {
            var row = new Array(3);
            this.size[i] = row;
        }
    },

    getNumber: function(row, column) {
        return this.size[row][column];
    },

    putNumber: function(spot, row, column) {
        this.size[row][column] = spot;
    },

    // inBlock: function(num) {
    //    for(var i=0; i<3; i++) {
    //        for(var j=0; j<3; j++) {
    //            if(this.getNumber(i, j).) {
    //                return true;
    //            }
    //        }
    //    }
    //     return false;
    // },

    //valueConstrainingVarCount: function(val) {
    
});