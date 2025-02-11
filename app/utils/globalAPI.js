import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cm6xrvm9v01hy07uqmbphenu3/master";

const getSlider = async () => {
  const query = gql`
    query getSLider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCategory = async () => {
  const query = gql`
    query getCategories {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        email
        contactPerson
        category {
          name
        }
        about
        address
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessListByCategory = async (category) => {
  const query = gql`
    query getBusinessList {
      businessLists(where: { category: { name: "${category}" } }) {
        id
        name
        email
        contactPerson
        category {
          name
        }
        about
        address
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessListByCategory,
};
