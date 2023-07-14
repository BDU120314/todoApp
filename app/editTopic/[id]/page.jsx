import EditTopicForm from '@/components/EditTopicForm';
import React from 'react';

const getSingleTopic = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/topic/${id}`, {
      cache: "no-store"
    });
    if (response.status === 200) {
      return response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const EditTopic = async({ params }) => {
  console.log(params);
  const { id } = params;
  const {response} = await getSingleTopic(id);
  return (
    <div>
      <EditTopicForm
        id={id}
        title={response.title}
        description={response.description}
      />
    </div>
  );
};

export default EditTopic;