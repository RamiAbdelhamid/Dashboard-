import axiosInstance from '../../components/axiosConfig';

// إضافة منشور جديد
export const addPost = (postData) => async (dispatch) => {
  try {
    const response = await axiosInstance.post(
      "/student_housing.json",
      postData
    );
    const newPost = { id: response.data.name, ...postData };
    dispatch({ type: 'ADD_POST', payload: newPost });
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

// جلب جميع المنشورات
export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/student_housing.json");
    const posts = [];
    for (let key in response.data) {
      posts.push({ id: key, ...response.data[key] });
    }
    dispatch({ type: 'FETCH_POSTS', payload: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

// الموافقة على منشور
export const approvePost = (postId) => async (dispatch) => {
  try {
    // تحديث حالة الموافقة في Firebase
    await axiosInstance.patch(`/student_housing/${postId}.json`, {
      approve: true, // تأكد من أن الاسم مطابق لما هو في Firebase
    });

    // تحديث Redux بعد نجاح العملية
    dispatch({ type: "APPROVE_POST", payload: postId });

    console.log(`Post ${postId} approved successfully.`);
  } catch (error) {
    console.error("Error approving post:", error);
  }
};



// حذف منشور
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/student_housing/${postId}.json`);
    dispatch({ type: 'DELETE_POST', payload: postId });
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};






// جلب جميع رسائل التواصل
export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/contacts.json");

    // تحويل البيانات إلى مصفوفة
    const contacts = Object.keys(response.data || {}).map((key) => ({
      id: key,
      ...response.data[key],
    }));

    dispatch({ type: "FETCH_CONTACTS", payload: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};