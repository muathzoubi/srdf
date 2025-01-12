
import './App.css';
import { vsitorLogger } from './vistorloger';
import { Slide, ToastContainer, toast } from 'react-toastify';

function App(props: any) {
  const notify = () => toast("تم الأضافة للسلة");
vsitorLogger("الرئيسية")
return (
    <>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            draggable
            theme="light"
            transition={Slide} />

      <div className="__className">
        <div className="MainContainer_childWrapper">
          <div className="MainContainer_headerContainer5N">
            <header className="Header_header__HSEQ9 Header_show">
              <div className="Header_nav">
                <div className="Header_logoWithCatalog">
                  <a
                    rel="noopener noreferrer"
                    data-analytic-label="logo"
                    data-analytic-element-location="header"
                    data-test-id="snoonulogo"
                    className="Logo_logo__oq6_b"
                    href="#"
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Snoonu"
                        src="/22.PNG"
                        decoding="async"
                        data-nimg="fill"
                        className="Logo_fullLogo__l2rPp"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="Snoonu"
                        src="/22.PNG"
                        decoding="async"
                        data-nimg="fill"
                        className="Logo_miniLogo__W0OJP"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </span>
                  </a>
                  <div className="CatalogMenu_wrapper">
                    <button
                      className="Button_button Button_secondary Button_small CatalogButton_button__wTnA9"
                      data-analytic-label="catalogMenuButton"
                      data-analytic-element-location="header"
                    >
                      <span className="Button_content">
                        <span
                          data-test-id=""
                          className="Icon_icon Button_icon__Shlur"
                        >
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            }}
                          >
                            <img
                              alt="icon"
                              src="/menu.4fcd2317.svg"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </span>
                        </span>
                        <span className="CatalogButton_text">القائمة</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="Search_wrappe">
                  <div>
                    <span data-test-id="" className="Icon_icon">
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          overflow: 'hidden',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt="icon"
                          src="/arrow_left.92b153fa.svg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <form action="#" className="Search_searchWrappe">
                    <div className="SearchSelector_wrapper__P_w2s">
                      <div className="SearchSelector_selector">
                        <p className="Typography_p8 SearchSelector_label">
                          جميع الأقسام
                        </p>
                        <span
                          data-test-id=""
                          className="Icon_icon"
                          style={{ width: 16, height: 16 }}
                        >
                          <span
                            style={{
                              boxSizing: 'border-box',
                              display: 'block',
                              overflow: 'hidden',
                              width: 'initial',
                              height: 'initial',
                              background: 'none',
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            }}
                          >
                            <img
                              alt="icon"
                              src="/chevron_down_gray.c120c600.svg"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: 'border-box',
                                padding: 0,
                                border: 'none',
                                margin: 'auto',
                                display: 'block',
                                width: 0,
                                height: 0,
                                minWidth: '100%',
                                maxWidth: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="Autocomplete_wrapper">
                      <span
                        data-test-id=""
                        className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon   Search_searchIcon__4o9Ok"
                      >
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="icon"
                            src="/search.8dc73f65.svg"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </span>
                      </span>
                      <input
                        data-test-id="searchField"
                        name="search"
                        className="Autocomplete_input__35ZrS Autocomplete_small__kgTkO Search_input__djH_7"
                        placeholder="ابحث عن منتج"
                        autoComplete="off"
                        type="search"
                      />
                      <div className="Autocomplete_rightSection">
                        <button
                          data-test-id="searchFieldBtn"
                          className="SearchButton_button  "
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon"
                            style={{ width: 20, height: 20 }}
                          >
                            <span
                              style={{
                                boxSizing: 'border-box',
                                display: 'block',
                                overflow: 'hidden',
                                width: 'initial',
                                height: 'initial',
                                background: 'none',
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <img
                                alt="icon"
                                src="/search_white.svg"
                                decoding="async"
                                data-nimg="fill"
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  bottom: 0,
                                  right: 0,
                                  boxSizing: 'border-box',
                                  padding: 0,
                                  border: 'none',
                                  margin: 'auto',
                                  display: 'block',
                                  width: 0,
                                  height: 0,
                                  minWidth: '100%',
                                  maxWidth: '100%',
                                  minHeight: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                }}
                              />
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="Header_sideWrapper">
                  <div
                    className="CartButton_wrapper"
                    style={{ display: 'block' }}
                  >
                    <button
                      className="Button_button Button_primary Button_small"
                      data-test-id="cartBtn"
                      data-analytic-label="cartButton"
                      data-analytic-element-location="header"
                    >
                      <span
                      style={{background:'#025380'}}
                      
                      className="Button_content">
                        <span
                          data-test-id=""
                          className="Icon_icon Button_icon__Shlur"
                          
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/cart.svg"
                              className="asyncicon"
                            />
                            <noscript />
                          </span>
                        </span>
                        <div className="  " style={{color:'white',padding:'6px 4px '}}>
                         <span>{props.total +'.00'}</span> د.ك
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>{' '}
          <div className="ContentWrapper_container">
            <h1 className="Typography_h1__cT2UT">أسماك الوطنية</h1>
            <p className="Typography_p7  Description_text__qN1Uu">
              اكتشف منتجاتنا عالية الجودة من الأسماك الطازجة والمستوردة
              والروبيان المميز، اطلب الآن مع أفضل وأسرع خدمة توصيل اونلاين.
            </p>
            <div className="Carousel_wrapper">
              <div className="Carousel_navButtonWrapper__gL_66">
                <div
                  data-analytic-label="carouselButtonPrev"
                  data-analytic-event-content="subCategories"
                  className="NavButton_wrapper__iJpe4 NavButton_prev__lHoNZ"
                >
                  <span
                    data-test-id=""
                    className="Icon_icon"
                    style={{ width: 24, height: 24 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/carousel_arrow_left.9172eaa1.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="Carousel_carousel__SoVOb SubCategories_row">
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={181}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/1.png"
                            decoding="async"
                            data-nimg="fill"
                            
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '70px',
                              objectFit: 'cover',
                              borderRadius:'100%',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      عروض
                    </p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={3644}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top1.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      سيباس تركي
                    </p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={2198}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top2.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      روبيان جامبو
                    </p>
                  </div>
                </div>
                <div
                  data-analytic-label="subCategory"
                  data-analytic-event-content={3405}
                  data-analytic-event-action="filter_apply"
                  className="FoodSubCategoryCard_fakeWrapper__wi0Cm"
                >
                  <div className="FoodSubCategoryCard_subCategory  ">
                    <div className="FoodSubCategoryCard_mainImageWrapper  ">
                      <div className="FoodSubCategoryCard_imageWrapper  ">
                        <span className="minus">
                          <img
                            src="/top3.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              boxSizing: 'border-box',
                              padding: 0,
                              border: 'medium',
                              margin: 'auto',
                              display: 'block',
                              width: 0,
                              height: 0,
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="Typography_p5   FoodSubCategoryCard_label">
                      سالمون نيجيري
                    </p>
                  </div>
                </div>
              </div>
              <div className="Carousel_navButtonWrapper__gL_66" />
            </div>
            <div className="FilterPresets_wrapper__sSfR_">
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={1}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 FilterPresets_first__ID2kE"
                >
                  <span
                    data-test-id=""
                    className="Icon_icon FilterPresets_icon"
                    style={{ width: 24, height: 24 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/free_delivery.33e8a802.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p6__xuxGw">توصيل مجاني</p>
                </div>
              </div>
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={2}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5"
                >
                  <p className="Typography_p6__xuxGw">خلال 40 دقيقة</p>
                </div>
              </div>
              <div className="FilterPresets_filterWrapper">
                <div
                  data-analytic-label="fastFilter"
                  data-analytic-event-content={4}
                  data-analytic-event-action="filter_apply"
                  className="FilterPresets_filter__czMu5 FilterPresets_last__3dQB8"
                >
                  <p className="Typography_p6__xuxGw">نقل مخصص</p>
                </div>
              </div>
            </div>
          </div>
          <div id="productList" className="ContentWrapper_container">
            <div
              className="MerchantCard_wrapper__ATC0P"
              style={{ margin: '-11px', borderRadius: '24px 24px 0 0' }}
            >
              <div className="MerchantCard_imageWrapper">
                <div className="MerchantPromoTag_promotion__vyiug MerchantCard_promotion__ahhw_">
                  <div className="MerchantPromoTag_promoTag__FEfqB MerchantPromoTag_percentageOff__nlGd7">
                    <p className="Typography_p10__GTCdN">خصم %30</p>
                  </div>
                  <div className="MerchantPromoTag_promoTag__FEfqB MerchantPromoTag_supportLocal__q0RXl">
                    <p className="Typography_p10__GTCdN">ادعم المحلي</p>
                  </div>
                </div>
                <span className="minus">
                  <img
                    alt="قائمة أسماك الوطنية"
                    src="/mb.jpg"
                    decoding="async"
                    data-nimg="fill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      boxSizing: 'border-box',
                      padding: 0,
                      border: 'medium',
                      margin: 'auto',
                      display: 'block',
                      width: 0,
                      height: 0,
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <noscript />
                </span>
                <div className="MerchantCard_deliveryTime__hFF6r">
                  <span
                    data-test-id=""
                    className="Icon_icon MerchantCard_driverIcon__VOTuk"
                    style={{ width: 16, height: 16 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/driver-white.39436dda.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p8">40 دقيقة</p>
                </div>
              </div>
              <div className="MerchantCard_content__aOUZU">
                <div className="MerchantCard_primaryDetails__zEdMX">
                  <p
                    className="Typography_p1__A2FUF MerchantCard_name__e7RSA"
                    style={{ fontSize: 25, height: 35, padding: '5px 0' }}
                  >
                    قائمة أسماك الوطنية
                  </p>
                </div>
                <div className="MerchantCard_secondaryDetails__c9r_K">
                  <div className="MerchantCard_rating__yd2Tt">
                    <span
                      data-test-id=""
                      className="Icon_icon"
                      style={{ width: 12, height: 12 }}
                    >
                      <span className="minus">
                        <img
                          alt="icon"
                          src="/star_yellow.3109f807.svg"
                          decoding="async"
                          data-nimg="fill"
                          className="asyncicon"
                        />
                        <noscript />
                      </span>
                    </span>
                    <p className="Typography_p8">4.7</p>
                  </div>
                  <p className="Typography_p8 MerchantCard_tags___u15_">
                    الأسماك الطازجة والمستوردة والروبيان المميز
                  </p>
                </div>
              </div>
            </div>
            <div className="_slug__merchantDetailsWrapper__Ni_d0">
              <div className="MerchantDetails_wrapper__NGWQ1">
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    وقت التوصيل
                  </p>
                  <span>
                    <p className="Typography_p1__A2FUF">
                      40{/* */} {/* */}دقيقة
                    </p>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    التقييم
                  </p>
                  <span>
                    <p className="Typography_p1__A2FUF">4.7</p>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    المسافة
                  </p>
                  <span>
                    <div className="MerchantPriceRange_averagePrice__tgZLX">
                      <p className="Typography_p1__A2FUF MerchantPriceRange_price__XHs4b MerchantPriceRange_priceActive__8rgoP">
                        15 كيلو
                      </p>
                    </div>
                  </span>
                </div>
                <div className="MerchantDetails_detail__ez3c5">
                  <p className="Typography_p8 MerchantDetails_label__diWJe">
                    ساعات العمل
                  </p>
                  <span>
                    <p className="Typography_p1__A2FUF">
                      <span className="MerchantDetails_status__UAoUR MerchantDetails_open__C8KJd">
                        مفتوح
                      </span>
                    </p>
                  </span>
                </div>
              </div>
              <div className="SearchInMerchant_wrapper__WNY3F">
                <form
                  action="#"
                  className="SearchInMerchant_searchWrapper__BhKze"
                >
                  <div className="Autocomplete_wrapper">
                    <span
                      data-test-id=""
                      className="Icon_icon Autocomplete_searchIcon   Autocomplete_smallIcon  "
                    >
                      <span
                        style={{
                          boxSizing: 'border-box',
                          display: 'block',
                          overflow: 'hidden',
                          width: 'initial',
                          height: 'initial',
                          background: 'none',
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <img
                          alt="icon"
                          src="/search.8dc73f65.svg"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'none',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </span>
                    </span>
                    <input
                      data-test-id="search-autocomplete"
                      name="search"
                      className="Autocomplete_input__35ZrS Autocomplete_small__kgTkO SearchInMerchant_input__F9QD7"
                      placeholder="ابحث في منتج"
                      autoComplete="off"
                      type="search"
                    />
                    <div className="Autocomplete_rightSection" />
                  </div>
                </form>
              </div>
              <div className="_slug__description___UXGB">
                أطلب الآن عبر موقعنا واحصل على خدمة توصيل سريعة في غضون 28
                دقيقة.
              </div>
            </div>
            <div className="BestSelling_wrapper__QVPK0 quantities_1">
              <h2 className="Typography_h2__Gzo5Y BestSelling_title__NuZ2_">
                عروض اليوم
              </h2>
              <div
                className="BestSelling_group__aDxsJ"
                style={{ position: 'relative', overflow: 'scroll' }}
              >
                <div className="pro_1">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz BestSelling_first__or9rS"
                    data-id="kuwaiti-jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="3 كرتون دجاج 10 حبة * 1000 جرام"
                          src="https://sam-five-snowy.vercel.app/images/2.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        8.000 د.ك
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        10 كيلو روبيان كويتي جامبو طازج
                      </p>
                    </div>
                    <div className="a_pluss_1">
                    <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        onClick={() => {
                          props.addToCart({
                            id: 0,
                            name: '10 كيلو روبيان كويتي جامبو طازج',
                            price: '8.0',
                            img: '/kuwaiti-jumbo-robian-10kg.jpg',
                          });
                          notify()
                        }}
                        data-product-id="product_1"
                        data-product-image="/kuwaiti-jumbo-robian-10kg.jpg"
                        data-product-name="10 كيلو روبيان كويتي جامبو طازج"
                        data-price={8.0}
                        data-class-add="btn_add_1"
                        data-class-remove="btn_remove_1"
                        data-class-pluss="btn_pluss_1"
                        data-class-aremove="a_pluss_1"
                        data-quantity-id="quantity_1"
                        data-qquantity-id="qquantity_1"
                      >
                        <span className="Button_content btn_add_1">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                      </a>
                    </div>
                    <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_1"
                        className="Typography_h5__MRrA0 quantity_1"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_1"
                        data-quantity-id="quantity_1"
                        data-defualt="defualt_1"
                        data-loadd="loadd_1"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_1">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_2">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz"
                    data-id="turkish-sea-bass-800-1000"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="كلوب ساندوتش دجاج وتيركي بخبز الساور دو"
                          src="https://sam-five-snowy.vercel.app/images/1.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        20.000 د.ك
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        كرتون 10 كيلو سيباس تركي حجم 800-1000
                      </p>
                    </div>
                    <div className="a_pluss_2">
                      <a
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        data-product-id="product_2"
                        data-product-image="           https://sam-five-snowy.vercel.app/images/1.png"
                        data-product-name="كرتون 10 كيلو سيباس تركي حجم 800-1000"
                        data-product-price={20.0}
                        data-class-add="btn_add_2"
                        data-class-remove="btn_remove_2"
                        data-class-pluss="btn_pluss_2"
                        data-class-aremove="a_pluss_2"
                        data-quantity-id="quantity_2"
                        data-qquantity-id="qquantity_2"
                        onClick={() => {
                          props.addToCart({
                            id: 0,
                            name: 'كرتون 10 كيلو سيباس تركي حجم 800-1000',
                            price: '20.0',
                            img: ' https://sam-five-snowy.vercel.app/image.png',
                          });
                        }}
                      >
                        <span className="Button_content btn_add_2">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 d-none" />
                      </a>
                    </div>
                    <div className="defualt_2 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_2  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_2"
                        className="Typography_h5__MRrA0 quantity_2"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_2"
                        data-quantity-id="quantity_2"
                        data-defualt="defualt_2"
                        data-loadd="loadd_2"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_2">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 " />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pro_3">
                  <div
                    className="ProductCardVertical_wrapper__q1lzz"
                    data-id="jumbo-robian-10kg"
                  >
                    <div className="CardProductImage_imageWrapper__0rzrL ProductCardVertical_image__B5TvN">
                      <span className="minus">
                        <img
                          alt="ساوردو ومولتيجرين"
                          src="https://sam-five-snowy.vercel.app/images/3.png"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            boxSizing: 'border-box',
                            padding: 0,
                            border: 'medium',
                            margin: 'auto',
                            display: 'block',
                            width: 0,
                            height: 0,
                            minWidth: '100%',
                            maxWidth: '100%',
                            minHeight: '100%',
                            maxHeight: '100%',
                            objectFit: 'cover',
                          }}
                        />
                        <noscript />
                      </span>
                    </div>
                    <div className="ProductCartVerticalDescription_info__0FmOx">
                      <h5 className="Typography_h5__MRrA0 ProductCartVerticalDescription_price__OtKd7">
                        8.000 د.ك
                      </h5>
                      <p className="Typography_p7  ProductCartVerticalDescription_name__M0ou9">
                        كرتون 10 كيلو روبيان جامبو مقشر
                      </p>
                    </div>
                    <div className="a_pluss_3">
                      <button
                        onClick={() =>
                          props.addToCart({
                            id: 0,
                            name: '10 كيلو روبيان كويتي جامبو طازج',
                            price: '8.0',
                            img: '/kuwaiti-jumbo-robian-10kg.jpg',
                          })
                        }
                        type="button"
                        className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                        data-product-id="product_3"
                        data-product-image="https://sam-five-snowy.vercel.app/images/1.png"
                        data-product-name="كرتون 10 كيلو روبيان جامبو مقشر"
                        data-product-price={8.0}
                        data-class-add="btn_add_3"
                        data-class-remove="btn_remove_3"
                        data-class-pluss="btn_pluss_3"
                        data-class-aremove="a_pluss_3"
                        data-quantity-id="quantity_3"
                        data-qquantity-id="qquantity_3"
                      >
                        <span className="Button_content btn_add_3">إضافة</span>
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 d-none" />
                      </button>
                    </div>
                    <div className="defualt_3 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_3  d-none ">
                      <a
                        className="updatecart"
                        data-type="minus"
                        data-product-id="product_3"
                        data-quantity-id="quantity_3"
                        data-defualt="defualt_3"
                        data-loadd="loadd_3"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              className="asyncicon"
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              src="/minus.3902b821.svg"
                            />
                          </span>
                        </span>
                      </a>
                      <h5
                        id="qquantity_3"
                        className="Typography_h5__MRrA0 quantity_3"
                      >
                        0
                      </h5>
                      <a
                        className="updatecart"
                        data-type="plus"
                        data-product-id="product_3"
                        data-quantity-id="quantity_3"
                        data-defualt="defualt_3"
                        data-loadd="loadd_3"
                      >
                        <span
                          data-test-id=""
                          className="Icon_icon ProductButton_icon__XyfwX"
                        >
                          <span className="minus">
                            <img
                              alt="icon"
                              decoding="async"
                              data-nimg="fill"
                              className="asyncicon"
                              src="/plus.d7f13c1f.svg"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="d-none loadd_3">
                      <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                        <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Products_wrapper__DZlbk quantities_2">
              <h2
                className="Typography_h2__Gzo5Y Products_title__qA1wA"
                style={{ margin: 0 }}
              >
                &nbsp;
              </h2>
              <div className="Products_group__gsBas">
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={800478}
                  className="ProductCardHorizontal_wrapper__byIUf pro_1"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض كل الكويت"
                        src="/kuwaiti-jumbo-robian-10kg.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        عرض كل الكويت
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        10 كيلو روبيان كويتي جامبو طازج.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="kuwaiti-jumbo-robian-10kg"
                    >
                      <h5 className="Typography_h5__MRrA0">8.000 د.ك</h5>
                      <div className="a_pluss_1">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_1"
                          data-product-image="/kuwaiti-jumbo-robian-10kg.jpg"
                          data-product-name="10 كيلو روبيان كويتي جامبو طازج"
                          data-product-price={8.0}
                          data-class-add="btn_add_1"
                          data-class-remove="btn_remove_1"
                          data-class-pluss="btn_pluss_1"
                          data-class-aremove="a_pluss_1"
                          data-quantity-id="quantity_1"
                          data-qquantity-id="qquantity_1"
                        >
                          <span className="Button_content btn_add_1">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 d-none" />
                        </a>
                      </div>
                      <div className="defualt_1 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_1  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_1"
                          className="Typography_h5__MRrA0 quantity_1"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_1"
                          data-quantity-id="quantity_1"
                          data-defualt="defualt_1"
                          data-loadd="loadd_1"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_1">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_1 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={203168}
                  className="ProductCardHorizontal_wrapper__byIUf pro_2"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض الوطنية"
                        src="           https://sam-five-snowy.vercel.app/images/1.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        عرض الوطنية
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        كرتون 10 كيلو سيباس تركي حجم 800-1000.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="turkish-sea-bass-800-1000"
                    >
                      <h5 className="Typography_h5__MRrA0">20.000 د.ك</h5>
                      <div className="a_pluss_2">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_2"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/1.png"
                          data-product-name="كرتون 10 كيلو سيباس تركي حجم 800-1000"
                          data-product-price={20.0}
                          data-class-add="btn_add_2"
                          data-class-remove="btn_remove_2"
                          data-class-pluss="btn_pluss_2"
                          data-class-aremove="a_pluss_2"
                          data-quantity-id="quantity_2"
                          data-qquantity-id="qquantity_2"
                        >
                          <span className="Button_content btn_add_2">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 d-none" />
                        </a>
                      </div>
                      <div className="defualt_2 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_2  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_2"
                          data-quantity-id="quantity_2"
                          data-defualt="defualt_2"
                          data-loadd="loadd_2"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_2"
                          className="Typography_h5__MRrA0 quantity_2"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_2"
                          data-quantity-id="quantity_2"
                          data-defualt="defualt_2"
                          data-loadd="loadd_2"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_2">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_2 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={137123}
                  className="ProductCardHorizontal_wrapper__byIUf pro_3"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="عرض اليوم"
                        src="           https://sam-five-snowy.vercel.app/images/3.png"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        عرض اليوم
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        كرتون 10 كيلو روبيان جامبو مقشر.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="jumbo-robian-10kg"
                    >
                      <h5 className="Typography_h5__MRrA0">8.000 د.ك</h5>
                      <div className="a_pluss_3">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_3"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/3.png"
                          data-product-name="كرتون 10 كيلو روبيان جامبو مقشر"
                          data-product-price={8.0}
                          data-class-add="btn_add_3"
                          data-class-remove="btn_remove_3"
                          data-class-pluss="btn_pluss_3"
                          data-class-aremove="a_pluss_3"
                          data-quantity-id="quantity_3"
                          data-qquantity-id="qquantity_3"
                        >
                          <span className="Button_content btn_add_3">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 d-none" />
                        </a>
                      </div>
                      <div className="defualt_3 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_3  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_3"
                          data-quantity-id="quantity_3"
                          data-defualt="defualt_3"
                          data-loadd="loadd_3"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_3"
                          className="Typography_h5__MRrA0 quantity_3"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_3"
                          data-quantity-id="quantity_3"
                          data-defualt="defualt_3"
                          data-loadd="loadd_3"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_3">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_3 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={203167}
                  className="ProductCardHorizontal_wrapper__byIUf pro_4"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="كرتون سيباس تركي"
                        src="/turkish-sea-bass.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        كرتون سيباس تركي
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        كرتون 10 كيلو سيباس تركي حجم 1000-1500.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="turkish-sea-bass"
                    >
                      <h5 className="Typography_h5__MRrA0">32.000 د.ك</h5>
                      <div className="a_pluss_4">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_4"
                          data-product-image="           https://sam-five-snowy.vercel.app/images/3.png"
                          data-product-name="كرتون 10 كيلو سيباس تركي حجم 1000-1500."
                          data-product-price={32.0}
                          data-class-add="btn_add_4"
                          data-class-remove="btn_remove_4"
                          data-class-pluss="btn_pluss_4"
                          data-class-aremove="a_pluss_4"
                          data-quantity-id="quantity_4"
                        >
                          <span className="Button_content btn_add_4">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_4 d-none" />
                        </a>
                      </div>
                      <div className="defualt_4 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_4  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_4"
                          data-quantity-id="quantity_4"
                          data-defualt="defualt_4"
                          data-loadd="loadd_4"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_4"
                          className="Typography_h5__MRrA0 quantity_4"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_4"
                          data-quantity-id="quantity_4"
                          data-defualt="defualt_4"
                          data-loadd="loadd_4"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_4">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_4 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-analytic-label="productCard"
                  data-test-id="cardOfProduct"
                  data-analytic-event-content={6900404}
                  className="ProductCardHorizontal_wrapper__byIUf pro_5"
                >
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="روبيان إيراني وسط"
                        src="/iranian-medium-robian-1kg.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        روبيان إيراني وسط
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 كيلو روبيان إيراني وسط.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="iranian-medium-robian-1kg"
                    >
                      <h5 className="Typography_h5__MRrA0">3.500 د.ك</h5>
                      <div className="a_pluss_5">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_5"
                          data-product-image="/iranian-medium-robian-1kg.jpg"
                          data-product-name="1 كيلو روبيان إيراني وسط."
                          data-product-price="3.500"
                          data-class-add="btn_add_5"
                          data-class-remove="btn_remove_5"
                          data-class-pluss="btn_pluss_5"
                          data-class-aremove="a_pluss_5"
                          data-quantity-id="quantity_5"
                        >
                          <span className="Button_content btn_add_5">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_5 d-none" />
                        </a>
                      </div>
                      <div className="defualt_5 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_5  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_5"
                          data-quantity-id="quantity_5"
                          data-defualt="defualt_5"
                          data-loadd="loadd_5"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_5"
                          className="Typography_h5__MRrA0 quantity_5"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_5"
                          data-quantity-id="quantity_5"
                          data-defualt="defualt_5"
                          data-loadd="loadd_5"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_5">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_5 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProductCardHorizontal_wrapper__byIUf pro_7">
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="سلمون نيجيري"
                        src="/nigerian-salmon.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        سلمون نيجيري
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 كيلو سلمون نيجيري.
                      </p>
                    </div>
                    <div
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="nigerian-salmon"
                    >
                      <h5 className="Typography_h5__MRrA0">5.750 د.ك</h5>
                      <div className="a_pluss_7">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_7"
                          data-product-image="/nigerian-salmon.jpg"
                          data-product-name="1 كيلو سلمون نيجيري."
                          data-product-price="5.750"
                          data-class-add="btn_add_7"
                          data-class-remove="btn_remove_7"
                          data-class-pluss="btn_pluss_7"
                          data-class-aremove="a_pluss_7"
                          data-quantity-id="quantity_7"
                        >
                          <span className="Button_content btn_add_7">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_7 d-none" />
                        </a>
                      </div>
                      <div className="defualt_7 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_7  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_7"
                          data-quantity-id="quantity_7"
                          data-defualt="defualt_7"
                          data-loadd="loadd_7"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_7"
                          className="Typography_h5__MRrA0 quantity_7"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_7"
                          data-quantity-id="quantity_7"
                          data-defualt="defualt_7"
                          data-loadd="loadd_7"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_7">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_7 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ProductCardHorizontal_wrapper__byIUf">
                  <div className="CardProductImage_imageWrapper__0rzrL ProductCardHorizontal_image__soYek">
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        overflow: 'hidden',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <img
                        alt="روبيان كبير"
                        src="/large-robian-1kg.jpg"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: 'border-box',
                          padding: 0,
                          border: 'none',
                          margin: 'auto',
                          display: 'block',
                          width: 0,
                          height: 0,
                          minWidth: '100%',
                          maxWidth: '100%',
                          minHeight: '100%',
                          maxHeight: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </span>
                  </div>
                  <div className="ProductCardHorizontal_info__FEa7G">
                    <div>
                      <h5 className="Typography_h5__MRrA0 ProductCardHorizontal_name__z0EMu">
                        روبيان كبير
                      </h5>
                      <p className="Typography_p8 ProductCardHorizontal_description__YSUl2">
                        1 كيلو روبيان كبير.
                      </p>
                    </div>
                    <div
                      id="pro_6"
                      className="ProductCardHorizontal_priceWrapper__3OYMk"
                      data-id="large-robian-1kg"
                    >
                      <h5 className="Typography_h5__MRrA0">4.500 د.ك</h5>
                      <div className="a_pluss_6">
                        <a
                          type="button"
                          className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t cd-add-to-cart js-cd-add-to-cart "
                          data-product-id="product_6"
                          data-product-image="/large-robian-1kg.jpg"
                          data-product-name="1 كيلو روبيان كبير."
                          data-product-price="4.500"
                          data-class-add="btn_add_6"
                          data-class-remove="btn_remove_6"
                          data-class-pluss="btn_pluss_6"
                          data-class-aremove="a_pluss_6"
                          data-quantity-id="quantity_6"
                        >
                          <span className="Button_content btn_add_6">
                            إضافة
                          </span>
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_6 d-none" />
                        </a>
                      </div>
                      <div className="defualt_6 ProductButton_productButton___1dmt ProductButton_secondary__qDYDR ProductButton_normal__jOR_t ProductCardHorizontal_productButton__aQoPQ btn_pluss_6  d-none ">
                        <a
                          className="updatecart"
                          data-type="minus"
                          data-product-id="product_6"
                          data-quantity-id="quantity_6"
                          data-defualt="defualt_6"
                          data-loadd="loadd_6"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                className="asyncicon"
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                src="/minus.3902b821.svg"
                              />
                            </span>
                          </span>
                        </a>
                        <h5
                          id="quantity_6"
                          className="Typography_h5__MRrA0 quantity_6"
                        >
                          0
                        </h5>
                        <a
                          className="updatecart"
                          data-type="plus"
                          data-product-id="product_6"
                          data-quantity-id="quantity_6"
                          data-defualt="defualt_6"
                          data-loadd="loadd_6"
                        >
                          <span
                            data-test-id=""
                            className="Icon_icon ProductButton_icon__XyfwX"
                          >
                            <span className="minus">
                              <img
                                alt="icon"
                                decoding="async"
                                data-nimg="fill"
                                className="asyncicon"
                                src="/plus.d7f13c1f.svg"
                              />
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="d-none loadd_6">
                        <a className="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary__qDYDR ProductButton_normal__jOR_t">
                          <div className="Loader_loader__4A5f1 Button_loader__I8AK4 btn_remove_6 " />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="MerchantCard_wrapper__ATC0P"
          style={{ display: 'none', marginTop: 35 }}
        >
          <div className="MerchantCard_imageWrapper" style={{ height: 424 }}>
            <span className="minus">
              <img
                decoding="async"
                data-nimg="fill"
                className="asyncicon"
                src="/459307463_1044724404108266_4808211461608369674_n.jpg"
                alt="تنويه"
              />
            </span>
            <div className="MerchantCard_deliveryTime__hFF6r">
              <span
                data-test-id=""
                className="Icon_icon MerchantCard_driverIcon__VOTuk"
                style={{ width: 16, height: 16 }}
              >
                <span className="minus">
                  <img
                    alt="icon"
                    src="/driver-white.39436dda.svg"
                    decoding="async"
                    data-nimg="fill"
                    className="asyncicon"
                  />
                </span>
              </span>
              <p className="Typography_p8">الموقع الرسمي</p>
            </div>
          </div>
        </div>
        <div className="allcarts">
          <div id="open_cart" className="CartButtonMob_wrapper">
            <div className="CartButtonMob_goToCart__50kKk">
              <div id="total" className="CartButtonMob_sum__7e1nq">
                <span
                  className="CartButtonMob_count__NyKX4"
                  style={{ background: 'white' }}
                >
                  <p className="Typography_p5  ">{props.cart.length}</p>
                </span>
                <h5 className="Typography_h5__MRrA0">
                  <span>{props.total}.00 د.ك</span>
                </h5>
              </div>
              <div
                className="CartButtonMob_goToCheckout__WILRU"
                style={{ cursor: 'pointer' }}
              >
                <a
                  href={'/https://sam-five-snowy.vercel.app/checkout/'}
                  style={{ display: 'flex', gap: 5, zIndex: 9999999999 }}
                >
                  <h5 className="Typography_h5__MRrA0">اذهب الى السلة</h5>
                  <span
                    data-test-id=""
                    className="Icon_icon CartButtonMob_icon__fwWfH"
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/go_to_checkout.b2db30ab.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="cartWrapper"
          style={{
            background: '#f6f6f6',
            padding: '20px 0',
            marginBottom: 20,
            display: 'none',
          }}
        ></div>
        <footer>
          <div
            className="ContentWrapper_container Footer_footer__fG8HL"
            style={{ marginTop: 0, padding: 20, marginBottom: 7 }}
          >
            <div className="Footer_info__7Pspt">
              <div className="Footer_legalLinks__fOusS">
                <a href="#">الشروط والأحكام</a>
                <a href="#">سياسة الخصوصية</a>
              </div>
              <p className="Footer_copyright__zeUcK">
                © 2024 الشركة الوطنية للاسماك
              </p>
            </div>
            <div className="Footer_socialLinks__Znatd">
              <div className="Footer_link__J_xuo">
                <span
                  data-test-id=""
                  className="Icon_icon"
                  style={{ width: 18, height: 18 }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <img
                      alt="icon"
                      src="/social_instagram.cf3c4b8c.svg"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: 'border-box',
                        padding: 0,
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: 0,
                        height: 0,
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </footer>
        {/* Shoping Card Model */}
        <div id="the_cart" className="Popup_overlay__p1f3r d-none">
          <div className="Popup_popup__1g1zm MarketplaceCheckoutDrawer_popup__lqJUf">
            <form
              id="model_data"
              className="MarketplaceCardPayment_wrapper__zopxM"
              method="post"
            >
              <input />{' '}
              <div className="AddressForm_wrapper__xeQ1H">
                <div
                  className="AddressForm_formWrapper__WZq2k"
                  style={{ marginTop: 30 }}
                >
                  <h3 className="Typography_h2__Gzo5Y AddressForm_titleMobile__4vv37">
                    موقع التوصيل
                  </h3>
                  <div className="AddressForm_form__i7dus">
                    <div className="Input_input__eCvQc">
                      <div className="Input_label__cUSvF ">الاسم</div>
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="name"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="addressInputField"
                          defaultValue=""
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc">
                      <div className="Input_label__cUSvF ">العنوان</div>
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="address"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="addressInputField"
                          defaultValue=""
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc AddressForm_apartment__yHdfK">
                      <div className="Input_label__cUSvF ">
                        الشقة/البناية السكنية
                      </div>
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="apartment"
                          className="Input_element__ukgk4"
                          type="text"
                          data-test-id="apartmentField"
                          defaultValue=""
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Input_input__eCvQc AddressForm_phone__pWBEF">
                      <div className="Input_label__cUSvF Input_active__QHdN6 Input_ignoreRtl__mB_4w">
                        رقم الهاتف
                      </div>
                      <div className="Input_elementWrapper__3kPMm">
                        <input
                          name="phone"
                          className="Input_element__ukgk4"
                          type="tel"
                          maxLength={12}
                          defaultValue={+965}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="Textarea_input__j1c7L">
                      <div
                        className="Textarea_symbolCounter__goJXS"
                        style={{ display: 'none' }}
                      >
                        <p className="Typography_p9__oo5il Textarea_counter__ou38x">
                          0/200
                        </p>
                      </div>
                      <textarea
                        maxLength={200}
                        name="notes"
                        className="Textarea_element__i94ZD AddressForm_textAreaPlaceholder"
                        placeholder="ضع تعليمات توصيل للسائق"
                        data-test-id="driverNote"
                        autoComplete="off"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="MarketplaceCardPayment_topContent__K5bEQ"
                style={{ marginTop: '-30px' }}
              >
                <h3 className="Typography_h3__HPYxa">طريقة الدفع</h3>
                <div
                  data-analytic-label="selectPaymentMethod"
                  data-test-id="choosePayMethodBtn"
                  className="PaymentMethods_paymentMethod__7SC8Y"
                >
                  <span
                    data-test-id=""
                    className="Icon_icon PaymentMethods_icon__m0OGl"
                    style={{ width: 32, height: 32 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/knet.png"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                  <p className="Typography_p3__dH_h7 PaymentMethods_label__7E6O1">
                    بطاقة السحب الآلي
                  </p>
                  <span
                    data-test-id=""
                    className="Icon_icon PaymentMethods_rightIcon__Y_bPY"
                    style={{ width: 16, height: 16 }}
                  >
                    <span className="minus">
                      <img
                        alt="icon"
                        src="/arrow_right.5c2803a9.svg"
                        decoding="async"
                        data-nimg="fill"
                        className="asyncicon"
                      />
                      <noscript />
                    </span>
                  </span>
                </div>
                <div className="OrderInfo_wrapper__GCgIK">
                  <div className="OrderSubCartInfo_cart__81olU">
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <h5 className="Typography_h5__MRrA0 OrderSubCartInfo_merchantName__nPjGh">
                        سلة أسماك الوطنية
                      </h5>
                      <h5
                        className="Typography_h5__MRrA0 OrderSubCartInfo_price__YrjcP"
                        style={{ display: 'none' }}
                      >
                        60.25 د.ك
                      </h5>
                    </div>
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <p className="Typography_p6__xuxGw">
                        المنتجات (<strong>0</strong>)
                      </p>
                      <p className="Typography_p6__xuxGw">
                        <span>0</span> د.ك
                      </p>
                    </div>
                    <div className="OrderSubCartInfo_item__D9NAh">
                      <p className="Typography_p6__xuxGw">قيمة التوصيل</p>
                      <p className="Typography_p6__xuxGw">0 د.ك</p>
                    </div>
                  </div>
                </div>
                <div
                  className="WithAddresses_list__Q3"
                  style={{ marginTop: 15 }}
                >
                  <div
                    className="CardAddress_wrapper__FXr7L CardAddress_active__wOP0k"
                    data-radio={1}
                  >
                    <span
                      className="Icon_icon CardAddress_icon__JUUsS"
                      style={{ width: 24, height: 24 }}
                    >
                      <span className="minus">
                        <input
                          id="payFull1"
                          defaultValue={20}
                          name="payFull"
                          type="radio"
                          style={{ width: 24, height: 24 }}
                        />
                      </span>
                    </span>
                    <label className="radio" htmlFor="payFull1">
                      <div
                        className="CardAddress_content__NJOQQ"
                        style={{ overflow: 'hidden', paddingTop: 2 }}
                      >
                        <p
                          className="Typography_p5   CardAddress_label__cYODn"
                          style={{ fontSize: 18, marginBottom: 10, width: 200 }}
                        >
                          دفع قيمة الطلب كاملة
                        </p>
                        <p
                          className="Typography_p6__xuxGw CardAddress_address__tGiBR"
                          style={{ fontSize: 13 }}
                        >
                          سدد اجمالي قيمة الطلب الآن وادفع من خلال كي-نت واحصل
                          على توصيل مجاني
                        </p>
                      </div>
                    </label>
                  </div>
                  <div
                    className="CardAddress_wrapper__FXr7L CardAddress_active__wOP0k"
                    style={{ marginTop: 15, marginBottom: 15 }}
                    data-radio={2}
                  >
                    <span
                      className="Icon_icon CardAddress_icon__JUUsS"
                      style={{ width: 24, height: 24 }}
                    >
                      <span className="minus">
                        <input
                          id="payFull2"
                          defaultValue="0.5"
                          name="payFull"
                          type="radio"
                          style={{ width: 24, height: 24 }}
                        />
                      </span>
                    </span>
                    <label className="radio" htmlFor="payFull2">
                      <div
                        className="CardAddress_content__NJOQQ"
                        style={{ overflow: 'hidden', paddingTop: 2 }}
                      >
                        <p
                          className="Typography_p5   CardAddress_label__cYODn"
                          style={{ fontSize: 17, marginBottom: 10 }}
                        >
                          دفع مبلغ 0.5 د.ك فقط لتأكيد طلبك
                        </p>
                        <p
                          className="Typography_p6__xuxGw CardAddress_address__tGiBR"
                          style={{ fontSize: 13 }}
                        >
                          يخصم من قيمة الطلب وادفع الباقي عند الاستلام مع دفع
                          مصاريف توصيل بقيمة 1 د.ك
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="MarketplaceCardPayment_stickyBottomContent__irsnG">
                <div
                  className="VoucherInfo_wrapper__YDPXt"
                  style={{ display: 'none' }}
                >
                  <p className="Typography_p6__xuxGw">قسيمة الخصم</p>
                  <div
                    data-analytic-label="addVoucher"
                    className="VoucherInfo_badge__wLFMy VoucherInfo_add__CQvtJ"
                  >
                    <h3
                      data-test-id="checkout-pay-with-voucher-add"
                      className="Typography_h4__KNXGH"
                    >
                      أضف +
                    </h3>
                  </div>
                </div>
                <div
                  className="PriceInfo_total__fL_R_"
                  style={{ marginTop: 10 }}
                >
                  <h3 className="Typography_h3__HPYxa">المجموع الكلي</h3>
                  <div className="PriceInfo_prices__TmlB4">
                    <h3
                      data-test-id="checkout-pay-with-products-total-price"
                      className="Typography_h3__HPYxa"
                    >
                      {5} د.ك
                    </h3>
                  </div>
                </div>
                <button
                  type="submit"
                  className="Button_button Button_primary Button_wide__XK76o"
                >
                  <span className="Button_content">
                    متابعة الدفع<p>(20 د.ك)</p>
                  </span>
                </button>
              </div>
              <div />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
