export type ProductInfo = {
  title: string;
  content: string;
};

export type ProductInfoMap = {
  [category: string]: ProductInfo;
};

const productInfoData: ProductInfoMap = {
  全部: {
    title: '精選推薦，全方位寵物生活',
    content:
      '無論是室內舒適生活，還是戶外探險，我們精選多樣智能寵物產品，滿足不同毛孩的需求。<br/>從高科技裝置到時尚家居，為您的寶貝打造最完善的生活體驗。',
  },
  智能戶外系列: {
    title: '智能戶外，探索無限',
    content:
      '無論是遛狗、露營，還是戶外探險，我們的戶外智能產品讓您的寵物安全又快樂。<br/>高科技設計結合耐用材質，為毛孩打造最棒的戶外體驗。',
  },
  質感室內系列: {
    title: '質感生活，舒適升級',
    content:
      '打造專屬於毛孩的溫馨居家環境，從智能寵物用品到質感家居，讓您的寶貝享受極致舒適。<br/>美學與功能兼具，讓每個角落都充滿愛與便利。。',
  },
  新品報到: {
    title: '最新趨勢，搶先體驗',
    content:
      '精選最新上市的寵物智能產品，結合創新科技與時尚設計，為毛孩帶來更好的生活體驗。<br/>立即探索新款商品，讓您的寵物走在潮流最前線！',
  },
  限時搶購: {
    title: '限時優惠，精打細算',
    content:
      '超值折扣好物，限時搶購中！讓您的毛孩用最優惠的價格享受高品質生活。<br/>別錯過精選商品優惠，把握機會帶回家！',
  },
  冠軍排行: {
    title: '熱銷推薦，口碑首選',
    content:
      '最受飼主喜愛的熱銷商品，一次集結人氣寵物好物！<br/>從智慧裝置到日常用品，讓您的毛孩也能擁有最多人推薦的頂級體驗。',
  },
};
export default productInfoData;
