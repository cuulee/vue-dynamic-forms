(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    339: function (a, t, i) {},
    396: function (a, t, i) {
      'use strict';
      var o = i(339);
      i.n(o).a;
    },
    418: function (a, t, i) {
      'use strict';
      i.r(t);
      var o = i(303),
        e = {
          name: 'ValidationEmailDemo',
          components: { DynamicForm: o.DynamicForm },
          data: function () {
            return {
              formData: null,
              testForm: {
                id: 'validation-email-demo',
                fields: [
                  new o.FormField({
                    type: 'email',
                    label: 'Email',
                    name: 'email',
                    value: 'awesome_avocad',
                    validations: [
                      new o.FormValidation(
                        o.email,
                        'Format of email is incorrect',
                      ),
                    ],
                  }),
                ],
                options: new o.FormOptions({ autoValidate: !0 }),
              },
            };
          },
          methods: {
            updateForm: function (a) {
              this.formData = a;
            },
          },
        },
        n = (i(396), i(44)),
        s = Object(n.a)(
          e,
          function () {
            var a = this,
              t = a.$createElement,
              i = a._self._c || t;
            return i(
              'div',
              { staticClass: 'form-composition library-example' },
              [
                i(
                  'div',
                  { staticClass: 'col' },
                  [
                    i('dynamic-form', {
                      attrs: {
                        id: a.testForm.id,
                        fields: a.testForm.fields,
                        options: a.testForm.options,
                      },
                      on: { change: a.updateForm },
                    }),
                    a._v(' '),
                    i('p', { staticClass: 'hint' }, [
                      a._v(
                        '\n      Please change the value and press enter (blur) to see the validation working 👆🏻\n    ',
                      ),
                    ]),
                  ],
                  1,
                ),
                a._v(' '),
                i('div', { staticClass: 'col' }, [
                  i('pre', [a._v(a._s(a.formData))]),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.default = s.exports;
    },
  },
]);
