/**
 * Created by ASUA on 2015/9/20.
 */
var React = require('react');
var QuestionCommentList = require("../components/QuestionCommentList.js");
var QuestionCommentForm = require('../components/QuestionCommentForm.js');

module.exports = React.createClass({
    ulStyle: {
        "margin-top": 10,
        "margin-bottom": 0
    },
    render: function () {
        return (
            <div>
                <QuestionCommentList />
                <QuestionCommentForm />
            </div>
        );
    }
});

