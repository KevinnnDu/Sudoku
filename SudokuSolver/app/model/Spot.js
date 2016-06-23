/**
 * Created by Kevin on 6/23/2016.
 */
Ext.define('SudokuSolver.model.Spot', {
    extend: 'Ext.data.Model',
    requires: [
        'SudokuSolver.model.ThreeThreeMatrix',
        'SudokuSolver.model.ThreeThreeMatrix'
    ],

    fields: [

        //The fields for this model. This is an Array of Ext.data.field.Field definition objects or simply the field name.
        //If just a name is given, the field type defaults to auto.  For example:

        { name: 'currVal',     type: 'int' },
        { name: 'row',      type: 'int' },
        { name: 'column',    type: 'int' },
        { name: 'blockIndex',   type: 'int' },
        { name: 'MRV', type: 'int' },
        { name: 'parent'},
        { name: 'possibleValue'}
    ],

    Constructor: function(val, r, c, b) {
        this.currVal = val;
        this.row = r;
        this.column = c;
        this.blockIndex = b;
    },

    getCurrVal: function() {
        return this.get('currVal');
    },
    setCurrVal: function(value) {
        this.set('currVal', value);
    },
    getRow: function() {
        return this.get('row');
    },
    setRow: function(value) {
        this.set('row', value);
    },
    getColumn: function() {
        return this.get('column');
    },
    setColumn: function(value) {
        this.set('column', value);
    },
    getBlockIndex: function() {
        return this.get('blockIndex');
    },
    setBlockIndex: function(value) {
        this.set('blockIndex', value);
    },
    getMRV: function() {
        return this.get('MRV');
    },
    setMRV: function(value) {
        this.set('MRV', value);
    },
    getPossibleValue: function() {
        return this.get('possibleValue');
    },
    setPossibleValue: function(value) {
        this.set('possibleValue', value);
    },
    contains: function(value) {
        if (Ext.Array.contains('possibleValue', value)) {
            return true;
        }
    return false;
    },

    associations: [
        {type: 'belongsTo', model: 'SudokuSolver.model.ThreeThreeMatrix'},
        {type: 'belongsTo', model: 'SudokuSolver.model.NineNineMatrix'}
    ]
});