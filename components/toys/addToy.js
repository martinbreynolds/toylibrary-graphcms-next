import { useState } from "react";
import useSWR from "swr";
import { GraphQLClient, gql } from "graphql-request";
// import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AddToy() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { data, error } = useSWR("/api/fetchEnums", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const enumValues = data.__type.enumValues;

  console.log(enumValues);

  const handleAsset = async (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("fileUpload", file);
    form.append("name", name);
    form.append("description", description);
    form.append("category", category);

    const response = await fetch("../../api/createAsset", {
      method: "POST",
      body: form,
    });
    const resData = await response.json();
    console.log("Front End " + resData);
  };

  return (
    <>
      <form onSubmit={handleAsset} className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          name="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          value={description}
          name="description"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        />

        <select
          name="select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option>---Select Category---</option>
          {enumValues.map((enumVal) => {
            return (
              <option value={enumVal.name} key={enumVal.name}>
                {enumVal.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="image">Add Image</label>
        <input
          name="image"
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <button
          type="submit"
          className="text-white bg-plum font-bold rounded-lg py-2 px-3"
        >
          Upload Image
        </button>
      </form>
    </>
  );
}
