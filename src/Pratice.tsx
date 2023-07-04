import { Formik, Form, Field, FieldArray } from "formik";

function InputField() {
  return (
    <Formik initialValues={{ tags: [""] }} onSubmit={() => {}}>
      {({ values }) => (
        <Form>
          <FieldArray name="tags">
            {({ remove, push }) => (
              <div>
                {values.tags && values.tags.length > 0 ? (
                  values.tags.map((tag, index) => (
                    <div key={index}>
                      <Field name={`tags[${index}]`}>
                        {({ field }: any) => (
                          <div>
                            <input
                              {...field}
                              id={field.name}
                              type="text"
                              value={"@" + tag}
                              onChange={(e) => {
                                const value = e.target.value.slice(1);
                                field.onChange({
                                  target: { value, name: field.name },
                                });
                              }}
                            />
                            <button type="button" onClick={() => remove(index)}>
                              Remove
                            </button>
                          </div>
                        )}
                      </Field>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => push("")}>
                    Add Tag
                  </button>
                )}
              </div>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default InputField;
