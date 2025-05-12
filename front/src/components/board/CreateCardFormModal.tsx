import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ICreateCardFormModalProps {
  onClose: () => void;
  onSubmit: (values: { title: string; description?: string }) => void;
}

export default function CreateCardFormModal({
  onClose,
  onSubmit,
}: ICreateCardFormModalProps) {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is a required field"),
    description: Yup.string(),
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">New Card</h2>

        <Formik
          initialValues={{ title: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
            onClose();
          }}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <Field
                name="title"
                className="w-full border rounded p-2 mt-1"
                placeholder="Card title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <Field
                as="textarea"
                name="description"
                className="w-full border rounded p-2 mt-1"
                placeholder="Optional description"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
