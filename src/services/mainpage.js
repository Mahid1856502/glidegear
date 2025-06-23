import api from "./api";

export const getNavData = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=Header&populate=Header.lightLogo&populate=Header.darkLogo&populate=Header.navs"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getMainPage = async () => {
  try {
    const response = await api.get("/api/page-home?fields[0]=title");
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getHeroSection = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=Hero&populate[1]=Hero.image"
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getPowerOfThreeSection = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=PowerOfThree&populate=PowerOfThree.Product&populate=PowerOfThree.Product.image"
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getSliderSection = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=Slider&populate[1]=Slider.image"
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getMarketingSection = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=Marketing&populate=Marketing.image&populate=Marketing.prodcut&populate=Marketing.prodcut.image&populate=Marketing.button.theme"
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getFeaturedProductsSection = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=FeaturedProducts&populate=FeaturedProducts.prodcut.image"
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};

export const getTestimonialsSection = async () => {
  try {
    const response = await api.get(
      "/api/page-home?populate[0]=Testimonials&populate=Testimonials.feedbacks"
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
};
