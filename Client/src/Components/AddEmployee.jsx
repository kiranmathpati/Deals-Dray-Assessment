// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddEmployee = () => {
//   const [employee, setEmployee] = useState({
//     name: "",
//     email: "",
//     password: "",
//     salary: "",
//     address: "",
//     category_id: "",
//     image: "",
//   });
//   const [category, setCategory] = useState([]);
//   const navigate = useNavigate()

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/auth/category")
//       .then((result) => {
//         if (result.data.Status) {
//           setCategory(result.data.Result);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const formData = new FormData();
//     formData.append('name', employee.name);
//     formData.append('email', employee.email);
//     formData.append('password', employee.password);
//     formData.append('address', employee.address);
//     formData.append('salary', employee.salary);
//     formData.append('image', employee.image);
//     formData.append('category_id', employee.category_id);

//     axios.post('http://localhost:3000/auth/add_employee', formData)
//     .then(result => {
//         if(result.data.Status) {
//             navigate('/dashboard/employee')
//         } else {
//             alert(result.data.Error)
//         }
//     })
//     .catch(err => console.log(err))
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-3">
//       <div className="p-3 rounded w-50 border">
//         <h3 className="text-center">Add Employee</h3>
//         <form className="row g-1" onSubmit={handleSubmit}>
//           <div className="col-12">
//             <label for="inputName" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-0"
//               id="inputName"
//               placeholder="Enter Name"
//               onChange={(e) =>
//                 setEmployee({ ...employee, name: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputEmail4" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control rounded-0"
//               id="inputEmail4"
//               placeholder="Enter Email"
//               autoComplete="off"
//               onChange={(e) =>
//                 setEmployee({ ...employee, email: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputPassword4" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control rounded-0"
//               id="inputPassword4"
//               placeholder="Enter Password"
//               onChange={(e) =>
//                 setEmployee({ ...employee, password: e.target.value })
//               }
//             />
//             <label for="inputSalary" className="form-label">
//               Salary
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-0"
//               id="inputSalary"
//               placeholder="Enter Salary"
//               autoComplete="off"
//               onChange={(e) =>
//                 setEmployee({ ...employee, salary: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12">
//             <label for="inputAddress" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control rounded-0"
//               id="inputAddress"
//               placeholder="1234 Main St"
//               autoComplete="off"
//               onChange={(e) =>
//                 setEmployee({ ...employee, address: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12">
//             <label for="category" className="form-label">
//               Category
//             </label>
//             <select name="category" id="category" className="form-select"
//                 onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
//               {category.map((c) => {
//                 return <option value={c.id}>{c.name}</option>;
//               })}
//             </select>
//           </div>
//           <div className="col-12 mb-3">
//             <label className="form-label" for="inputGroupFile01">
//               Select Image
//             </label>
//             <input
//               type="file"
//               className="form-control rounded-0"
//               id="inputGroupFile01"
//               name="image"
//               onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
//             />
//           </div>
//           <div className="col-12">
//             <button type="submit" className="btn btn-primary w-100">
//               Add Employee
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployee;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("address", employee.address);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);
    formData.append("mobile", employee.mobile);
    formData.append("designation", employee.designation);
    formData.append("gender", employee.gender);
    formData.append("course", employee.course);

    axios
      .post("http://localhost:3000/auth/add_employee", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEmployee({
        ...employee,
        course: [...employee.course, value],
      });
    } else {
      setEmployee({
        ...employee,
        course: employee.course.filter((c) => c !== value),
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputMobile" className="form-label">Mobile No</label>
            <input
              type="tel"
              className="form-control rounded-0"
              id="inputMobile"
              placeholder="Enter Mobile No"
              pattern="[0-9]{10}"
              onChange={(e) => setEmployee({ ...employee, mobile: e.target.value })}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
            />
          </div>

          <div className="col-12">
            <label htmlFor="designation" className="form-label">Designation</label>
            <select
              id="designation"
              className="form-select"
              onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Gender</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="M"
                onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                id="female"
                name="gender"
                value="F"
                onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Course</label>
            <div>
              <input
                type="checkbox"
                id="mca"
                value="MCA"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="mca">MCA</label>

              <input
                type="checkbox"
                id="bca"
                value="BCA"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="bca">BCA</label>

              <input
                type="checkbox"
                id="bsc"
                value="BSC"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="bsc">BSC</label>
            </div>
          </div>

          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">Select Image</label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
