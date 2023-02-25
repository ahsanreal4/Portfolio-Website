import { Feature } from 'models/Feature'
import { Package } from 'models/Package'
import { NextPage } from 'next'
import { IServicePackagesProps } from './Packages.types'

const ServicePackages: NextPage<IServicePackagesProps> = ({
  features,
  services
}) => {
  const renderPackageNames = () =>
    services.map((service: Package, index: number) => (
      <a
        key={index}
        href='#'
        className='pricing-tab active mb-2'
        data-target='pricing-1-data'
      >
        {service.name}
      </a>
    ))

  const renderTableHeaders = () =>
    services.map((service: Package, index: number) => (
      <th
        key={index}
        scope='col'
        className={`pricing-package-title pricing-${index + 1}-data`}
      >
        {service.name}
      </th>
    ))

  const renderPackagePrices = () =>
    services.map((service: Package, index: number) => (
      <td
        key={index}
        className={`pricing-${index + 1}-data ${
          index > 0 && 'mobile-is-hidden'
        }`}
      >
        <span className='price-number'>{service.price}</span>
      </td>
    ))

  const renderDetails = () =>
    services.map((service: Package, index: number) => (
      <td
        key={index}
        className={`pricing-${index + 1}-data ${
          index > 0 && 'mobile-is-hidden'
        }`}
      >
        <span className='pricing-package-desc'>{service.details}</span>
      </td>
    ))

  const renderFeatures = () =>
    features.map((feature: Feature, index: number) => {
      const servicesTemp = []
      for (let i = 0; i < services.length; i++) {
        const service: Package = services[i]
        if (service.features.includes(feature.id)) {
          servicesTemp.push(service)
        } else {
          servicesTemp.push({ name: 'Null' })
        }
      }

      return (
        <tr key={index} className='pricing-feature-row'>
          <th className='pricing-feature-row-name pricing-0-data' scope='row'>
            {feature.name}
            <br />
            <small className='feature-desc font-weight-normal text-muted'>
              {feature.description}
            </small>
          </th>
          {servicesTemp.map((service, index3: number) => (
            <td
              key={index3}
              className={`pricing-${index3}-data ${
                index3 > 0 && 'mobile-is-hidden'
              }`}
            >
              {service.name === 'Null' ? (
                <span className='text-muted'> - </span>
              ) : (
                <i className='fas fa-check text-primary' />
              )}
            </td>
          ))}
        </tr>
      )
    })

  const renderRevisions = () => {
    return (
      <tr className='pricing-feature-row'>
        <th className='pricing-feature-row-name pricing-0-data' scope='row'>
          Revisions
        </th>
        {services.map((service: Package, index: number) => (
          <td
            key={index}
            className={`pricing-${index}-data ${
              index > 0 && 'mobile-is-hidden'
            }`}
          >
            <span className='text-muted'>{service.revisions}</span>
          </td>
        ))}
      </tr>
    )
  }

  const renderDeliveries = () => {
    return (
      <tr className='pricing-feature-row'>
        <th className='pricing-feature-row-name pricing-0-data' scope='row'>
          Delivery Time
        </th>
        {services.map((service: Package, index: number) => (
          <td
            key={index}
            className={`pricing-${index}-data ${
              index > 0 && 'mobile-is-hidden'
            }`}
          >
            <span className='text-muted'>{service.deliveryTime}</span>
          </td>
        ))}
      </tr>
    )
  }

  return (
    <section className='pricing-section py-5'>
      <div className='container single-col-max-width'>
        <h3 className='text-center mb-4'>Service Packages</h3>
        <div id='pricing-tabs' className='pricing-tabs d-block d-md-none mb-3'>
          {renderPackageNames()}
        </div>
        {/*//pricing-mobile-tabs*/}
        <table id='pricing-table' className='pricing-table table-bordered'>
          <thead>
            <tr className='border-0'>
              <th scope='col' className='pricing-0-data theme-bg-light' />
              {renderTableHeaders()}
            </tr>
          </thead>
          <tbody>
            <tr className='pricing-price-row'>
              <th scope='row' className='pricing-0-data'>
                Package Price
              </th>
              {renderPackagePrices()}
            </tr>
            <tr className='pricing-desc-row'>
              <th scope='row' className='pricing-0-data'>
                Details
              </th>
              {renderDetails()}
            </tr>
            {renderFeatures()}
            {renderRevisions()}
            {renderDeliveries()}
          </tbody>
          <tfoot>
            <tr className='pricing-cta-row'>
              <td className='pricing-0-data' />
              <td className='pricing-1-data'>
                <a className='btn btn-primary' href='#'>
                  Book Now
                </a>
              </td>
              <td className='pricing-2-data mobile-is-hidden'>
                <a className='btn btn-primary' href='#'>
                  Book Now
                </a>
              </td>
              <td className='pricing-3-data mobile-is-hidden'>
                <a className='btn btn-primary' href='#'>
                  Get A Quote
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
        {/*//pricing-table*/}
      </div>
      {/*//container*/}
    </section>
  )
}

export default ServicePackages
