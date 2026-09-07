import { useParams, Link, useNavigate } from "react-router-dom";
import { CATALOG_PRODUCTS } from "./catalogData";
import { useState } from "react";
import tradapic from "../../assets/tradehero.png";

/* ============================================================
   BADGE STYLES MAP - SIMPLIFIED
   ============================================================ */

const BADGE_STYLES = {
  gold: "bg-amber-50 text-amber-900 border border-amber-200",
  premium: "bg-slate-900 text-white border border-slate-900",
  green: "bg-emerald-50 text-emerald-900 border border-emerald-200",
};

const BADGE_LABELS = {
  gold: "Premium",
  premium: "Premium Grade",
  green: "Standard",
};

/* ============================================================
   PRODUCT DETAIL PAGE COMPONENT - REDESIGNED
   ============================================================ */

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");

  const product = CATALOG_PRODUCTS.find((p) => p.id === id);

  /* ============================================================
     PRODUCT NOT FOUND
     ============================================================ */

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-slate-900 mb-2">
            Product not found
          </h1>

          <p className="text-slate-600 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>

          <Link
            to="/Tradepage#products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const badgeClass = BADGE_STYLES[product.badgeColor] || BADGE_STYLES.green;
  const badgeLabel = BADGE_LABELS[product.badgeColor] || "Standard";

  const relatedProducts = CATALOG_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  /* ============================================================
     PAGE LAYOUT
     ============================================================ */

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION - Background image for navbar visibility (like TradePage) */}
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden bg-[#2b1a13] -mt-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={tradapic}
            alt="Product Background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#24140f]/70" />
          <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-[#24140f]/30 via-[#24140f]/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-16 pt-48">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link to="/Tradepage" className="text-white/70 hover:text-white transition-colors">
              Products
            </Link>
            <span className="text-white/40">/</span>
            <Link to="/Tradepage#products" className="text-white/70 hover:text-white transition-colors">
              {product.categoryLabel}
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">{product.name}</span>
          </nav>

          {/* Product Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-[720px]">
            {product.name}
          </h1>
          <p className="mt-3 text-white/70 text-lg max-w-[600px]">
            {product.description}
          </p>
        </div>
      </section>


      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* PRODUCT HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">

          {/* PRODUCT IMAGE - Ecommerce Style */}
          <div className="lg:col-span-6 sticky top-8 h-fit">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
              <div className="relative w-full aspect-square flex items-center justify-center p-6 sm:p-10 bg-gradient-to-br from-slate-50 via-white to-slate-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-md"
                />
              </div>
              
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${badgeClass}`}>
                {badgeLabel}
              </div>

              {/* Zoom hint */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-4">
              <button className="relative w-18 h-18 rounded-xl overflow-hidden border-2 border-slate-900 bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-1"
                />
              </button>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* CATEGORY */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {product.categoryLabel}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-lg">
              {product.description}
            </p>

            {/* DIVIDER */}
            <div className="border-t border-slate-200 my-6"></div>

            {/* KEY INFO GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quality</span>
                <p className="text-slate-900 font-semibold mt-1">{badgeLabel}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product ID</span>
                <p className="text-slate-900 font-semibold mt-1 font-mono text-sm">{product.id.toUpperCase()}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 col-span-2 sm:col-span-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Category</span>
                <p className="text-slate-900 font-semibold mt-1">{product.categoryLabel}</p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-slate-200 my-2"></div>

            {/* CTA BUTTONS - Ecommerce Style */}
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="#configurator"
                className="w-full py-4 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 text-center shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 active:translate-y-0 text-lg"
              >
                Request a Quote
              </a>
              <Link
                to="/Tradepage#products"
                className="w-full py-4 px-6 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-center hover:-translate-y-0.5 active:translate-y-0"
              >
                View All Products
              </Link>
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Export Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bulk Orders</span>
              </div>
            </div>

          </div>

        </section>

        {/* DETAILS TABS */}
        <section className="mb-16">
          
          {/* TAB NAVIGATION */}
          <div className="border-b border-slate-200 mb-8">
            <div className="flex gap-8">
              {[
                { id: "description", label: "Description" },
                { id: "specifications", label: "Specifications" },
                { id: "shipping", label: "Shipping" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 font-medium text-sm relative transition-colors ${
                    activeTab === tab.id
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* TAB CONTENT */}
          <div className="max-w-3xl">
            
            {/* DESCRIPTION */}
            {activeTab === "description" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    About this product
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <p className="text-slate-600 leading-relaxed">
                    Our {product.categoryLabel.toLowerCase()} products are sourced
                    from the finest farms and processed using modern technology to
                    ensure consistent quality standards.
                  </p>
                </div>

                <div>
                  <p className="text-slate-600 leading-relaxed">
                    Whether you're looking for retail packaging or bulk orders, we
                    offer flexible solutions tailored to your business needs. Contact
                    our sales team to discuss custom requirements for your business.
                  </p>
                </div>
              </div>
            )}

            {/* SPECIFICATIONS */}
            {activeTab === "specifications" && (
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-6">
                  Technical specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase">
                      Product name
                    </span>
                    <p className="text-slate-900 font-semibold mt-2">
                      {product.name}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase">
                      Category
                    </span>
                    <p className="text-slate-900 font-semibold mt-2">
                      {product.categoryLabel}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase">
                      Quality grade
                    </span>
                    <p className="text-slate-900 font-semibold mt-2">
                      {badgeLabel}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase">
                      Product ID
                    </span>
                    <p className="text-slate-900 font-semibold mt-2 font-mono text-sm">
                      {product.id.toUpperCase()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SHIPPING */}
            {activeTab === "shipping" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Packaging options
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-3">
                      <span className="text-slate-400">•</span>
                      <span>Retail packs: 1kg, 2kg, 5kg, 10kg, 25kg</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-400">•</span>
                      <span>Bulk packaging: 25kg, 50kg bags or custom sizes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Shipping details
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex gap-3">
                      <span className="text-slate-400">•</span>
                      <span>Worldwide shipping available</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-400">•</span>
                      <span>FOB, CIF, CFR terms available</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <section className="mb-12 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              You may also like
            </h2>
            <p className="text-slate-500 mb-8">Similar products from our catalog</p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/trade/product/${relatedProduct.id}`}
                  className="group block no-underline bg-white rounded-xl border border-slate-200 hover:border-slate-300 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-slate-50 to-white p-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
                      {relatedProduct.categoryLabel}
                    </p>
                    <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2 text-sm sm:text-base">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 hidden sm:block">
                      {relatedProduct.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>

    </div>
  );
}