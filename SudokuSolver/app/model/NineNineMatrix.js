/**
 * Created by Kevin on 6/23/2016.
 */
Ext.define('SudokuSolver.model.NineNineMatrix', {
    extend: 'Ext.data.Model',

    fields: [

       // The fields for this model. This is an Array of Ext.data.field.Field definition objects or simply the field name.
      //  If just a name is given, the field type defaults to auto.  For example:

        { name: 'rowSet',     type: 'auto' },
        { name: 'columnSet',      type: 'auto' },
        { name: 'blockSet',    type: 'auto' },
        { name: 'solved',   type: 'boolean' }
    ]

});